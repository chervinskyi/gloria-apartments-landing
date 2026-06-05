"use client"

import { Star, Quote, ExternalLink } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations, BOOKING_URL } from "@/lib/translations"
import { Reveal } from "@/components/reveal"

export function Reviews({ lang }: { lang: Lang }) {
  const t = translations[lang].reviews

  return (
    <section id="reviews" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Score overview */}
        <Reveal className="mt-12 grid gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="flex flex-col items-center justify-center gap-2 border-b border-border/60 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <div className="font-serif text-7xl font-semibold leading-none text-primary">
              {t.score}
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-lg font-semibold text-foreground">{t.scoreWord}</div>
            <div className="text-sm text-muted-foreground">{t.scoreCount}</div>
          </div>
          <div className="grid gap-3 md:pl-2">
            {t.categories.map((cat) => (
              <div key={cat.label} className="flex items-center gap-3">
                <span className="w-40 shrink-0 text-sm text-muted-foreground">
                  {cat.label}
                </span>
                <div className="flex flex-1 items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${(cat.value / 10) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-sm font-semibold text-foreground">
                    {cat.value.toFixed(1).replace(".", lang === "uk" ? "," : ".")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.list.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 100}
              className="relative flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-secondary/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-foreground/80">
                {review.text}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary/15 font-serif text-lg font-semibold text-secondary">
                  {review.name.charAt(0)}
                </div>
                <span className="font-medium text-foreground">{review.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-8 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <ExternalLink className="size-4" />
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
