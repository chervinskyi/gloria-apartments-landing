"use client"

import Image from "next/image"
import type { Lang } from "@/lib/translations"
import { translations, galleryImages } from "@/lib/translations"
import { Reveal } from "@/components/reveal"

export function Gallery({ lang }: { lang: Lang }) {
  const t = translations[lang].gallery

  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-12 [column-fill:_balance] gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <div key={img.src} className="mb-4 break-inside-avoid">
              <div
                className={`relative w-full overflow-hidden rounded-2xl shadow-sm transition-transform duration-500 hover:scale-[1.02] ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={lang === "uk" ? img.altUk : img.altEn}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
