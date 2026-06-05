import { NextRequest, NextResponse } from "next/server"

// Simple in-memory rate limit: max 3 requests per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }
  if (entry.count >= LIMIT) return false
  entry.count++
  return true
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set")
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, phone, email, checkin, checkout, guests, comment } = body

  // Server-side validation
  if (!name?.trim()) return NextResponse.json({ error: "Name is required" }, { status: 400 })
  if (!phone?.trim()) return NextResponse.json({ error: "Phone is required" }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? ""))
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  if (!checkin) return NextResponse.json({ error: "Check-in date is required" }, { status: 400 })
  if (!checkout) return NextResponse.json({ error: "Check-out date is required" }, { status: 400 })

  const text = [
    "🏠 <b>Нова заявка на бронювання — Gloria Apartments</b>",
    "",
    `👤 <b>Ім'я:</b> ${escapeHtml(name.trim())}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone.trim())}`,
    `📧 <b>Email:</b> ${escapeHtml(email.trim())}`,
    `📅 <b>Заїзд:</b> ${escapeHtml(checkin)}`,
    `📅 <b>Виїзд:</b> ${escapeHtml(checkout)}`,
    `👥 <b>Гостей:</b> ${escapeHtml(guests ?? "2")}`,
    comment?.trim()
      ? `💬 <b>Коментар:</b> ${escapeHtml(comment.trim())}`
      : null,
  ]
    .filter(Boolean)
    .join("\n")

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    console.error("Telegram API error:", err)
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
