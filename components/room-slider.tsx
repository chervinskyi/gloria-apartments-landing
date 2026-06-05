"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function RoomSlider({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [index, setIndex] = useState(0)
  const count = images.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
      {images.map((src, i) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}
          alt={`${alt} — ${i + 1}`}
          className="absolute inset-0 size-full object-cover transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-background" : "w-1.5 bg-background/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
