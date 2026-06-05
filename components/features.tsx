"use client"

import { TreePine, Droplets, ChefHat, Wifi } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"
import { Reveal } from "@/components/reveal"

const icons = [TreePine, Droplets, ChefHat, Wifi]

export function Features({ lang }: { lang: Lang }) {
  const t = translations[lang].features

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
