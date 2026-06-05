"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  CheckCircle2,
} from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations, BOOKING_URL } from "@/lib/translations"
import { Reveal } from "@/components/reveal"

export function BookingContacts({ lang }: { lang: Lang }) {
  const t = translations[lang].booking
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "2",
    comment: "",
  })

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: false }))
    setServerError(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, boolean> = {}
    if (!form.name.trim()) newErrors.name = true
    if (!form.phone.trim()) newErrors.phone = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true
    if (!form.checkin) newErrors.checkin = true
    if (!form.checkout) newErrors.checkout = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setServerError(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        setServerError(true)
      } else {
        setSubmitted(true)
      }
    } catch {
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacts" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-secondary" strokeWidth={1.5} />
                <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-foreground">
                  {t.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label={t.name}
                    error={errors.name}
                    value={form.name}
                    onChange={(v) => update("name", v)}
                  />
                  <FormField
                    label={t.phone}
                    type="tel"
                    error={errors.phone}
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                </div>
                <FormField
                  label={t.email}
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => update("email", v)}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label={t.checkin}
                    type="date"
                    error={errors.checkin}
                    value={form.checkin}
                    onChange={(v) => update("checkin", v)}
                  />
                  <FormField
                    label={t.checkout}
                    type="date"
                    error={errors.checkout}
                    value={form.checkout}
                    onChange={(v) => update("checkout", v)}
                  />
                </div>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium text-foreground">
                    {t.guests}
                  </span>
                  <select
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium text-foreground">
                    {t.comment}
                  </span>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => update("comment", e.target.value)}
                    placeholder={t.commentPlaceholder}
                    className="resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-secondary"
                  />
                </label>
                {serverError && (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
                    {lang === "uk"
                      ? "Щось пішло не так. Спробуйте ще раз або зателефонуйте нам."
                      : "Something went wrong. Please try again or call us."}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading && (
                    <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  )}
                  {t.submit}
                </button>
              </form>
            )}
          </Reveal>

          {/* Contacts + map */}
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {t.contactsTitle}
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <ContactRow icon={<MapPin className="size-5" />}>
                  {t.address}
                </ContactRow>
                <ContactRow icon={<Phone className="size-5" />}>
                  <a href="tel:+380000000000" className="hover:text-secondary">
                    +38 (000) 000 00 00
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail className="size-5" />}>
                  <a
                    href="mailto:hello@gloria-apartments.com"
                    className="hover:text-secondary"
                  >
                    hello@gloria-apartments.com
                  </a>
                </ContactRow>
                <ContactRow icon={<Clock className="size-5" />}>
                  {t.checkTimes}
                </ContactRow>
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <ExternalLink className="size-4" />
                {t.bookingBtn}
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-sm">
              <iframe
                title={t.mapTitle}
                src="https://www.google.com/maps?q=Gloria+Apartments+Skhidnytsia+Ukraine&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  error?: boolean
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error}
        className={`rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary ${
          error ? "border-destructive" : "border-border"
        }`}
      />
    </label>
  )
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3 text-foreground/80">
      <span className="mt-0.5 shrink-0 text-secondary">{icon}</span>
      <span>{children}</span>
    </li>
  )
}
