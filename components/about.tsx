"use client"

import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"
import { Reveal } from "@/components/reveal"

export function About({ lang }: { lang: Lang }) {
  const t = translations[lang].about

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {t.label}
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {t.text1}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.text2}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
            {t.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/about.png"
              alt={
                lang === "uk"
                  ? "Фасад гостьового будинку серед лісу"
                  : "Guesthouse facade among the forest"
              }
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-sm"
            />
            <img
              src="/images/gallery-2.png"
              alt={
                lang === "uk" ? "Затишні деталі інтер'єру" : "Cozy interior details"
              }
              className="aspect-square w-full rounded-2xl object-cover shadow-sm"
            />
            <img
              src="/images/gallery-1.png"
              alt={lang === "uk" ? "Карпатський ліс" : "Carpathian forest"}
              className="aspect-square w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
