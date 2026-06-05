"use client"

import { useState } from "react"
import { CalendarDays, Users, Search, ExternalLink } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations, BOOKING_URL } from "@/lib/translations"

export function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero
  const [checkin, setCheckin] = useState("")
  const [checkout, setCheckout] = useState("")
  const [guests, setGuests] = useState("2")

  const goToBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const el = document.querySelector("#contacts")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="/images/booking/photo-6.jpg"
        alt={
          lang === "uk"
            ? "Тераса апартаментів Gloria із садом у Східниці"
            : "Terrace of Gloria Apartments with garden in Skhidnytsia"
        }
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/65" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pt-28 pb-16 text-center md:px-8">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
          <span className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-0.5 font-serif text-sm font-bold text-primary-foreground">
            {t.rating}
          </span>
          <span className="font-semibold">{t.ratingWord}</span>
          <span className="text-muted-foreground">· {t.ratingCount}</span>
        </div>
        <h1 className="reveal is-visible text-balance font-serif text-4xl font-semibold leading-[1.05] text-background sm:text-5xl md:text-6xl lg:text-7xl">
          {t.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/90 md:text-lg">
          {t.subtitle}
        </p>

        {/* Booking mini-form */}
        <form
          onSubmit={goToBooking}
          className="mx-auto mt-10 grid w-full max-w-3xl gap-3 rounded-2xl bg-background/95 p-4 text-left shadow-xl backdrop-blur-sm sm:grid-cols-2 md:grid-cols-4 md:items-end"
        >
          <Field label={t.checkin} icon={<CalendarDays className="size-4" />}>
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none"
            />
          </Field>
          <Field label={t.checkout} icon={<CalendarDays className="size-4" />}>
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none"
            />
          </Field>
          <Field label={t.guests} icon={<Users className="size-4" />}>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? t.guest : t.guests2to4}
                </option>
              ))}
            </select>
          </Field>
          <button
            type="submit"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Search className="size-4" />
            {t.check}
          </button>
        </form>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-background underline-offset-4 hover:underline"
        >
          <ExternalLink className="size-4" />
          {t.booking}
        </a>
      </div>
    </section>
  )
}

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2.5">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}
