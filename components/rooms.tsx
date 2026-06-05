"use client"

import { Check, Users, ExternalLink } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations, BOOKING_URL } from "@/lib/translations"
import { Reveal } from "@/components/reveal"
import { RoomSlider } from "@/components/room-slider"

const roomImages = [
  ["/images/booking/photo-2.jpg", "/images/booking/photo-3.jpg", "/images/booking/photo-8.jpg"],
  ["/images/booking/photo-7.jpg", "/images/booking/photo-5.jpg", "/images/booking/photo-6.jpg"],
]

export function Rooms({ lang }: { lang: Lang }) {
  const t = translations[lang].rooms

  return (
    <section id="rooms" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {t.list.map((room, i) => (
            <Reveal
              key={room.name}
              delay={i * 120}
              className="grid overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm md:grid-cols-2"
            >
              <RoomSlider images={roomImages[i]} alt={room.name} />

              <div className="flex flex-col p-6 md:p-7">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-secondary">
                  <Users className="size-4" />
                  {room.capacity}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {room.desc}
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-1.5 text-sm text-foreground/80"
                    >
                      <Check className="size-4 shrink-0 text-secondary" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-border/60 pt-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm text-muted-foreground">{t.from}</span>
                    <span className="font-serif text-2xl font-semibold text-foreground">
                      {room.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t.perNight}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{t.priceNote}</p>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="#contacts"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {t.details}
                  </a>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <ExternalLink className="size-4" />
                    {t.booking}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
