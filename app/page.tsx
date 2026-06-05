"use client"

import { useState } from "react"
import type { Lang } from "@/lib/translations"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Rooms } from "@/components/rooms"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { BookingContacts } from "@/components/booking-contacts"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  const [lang, setLang] = useState<Lang>("uk")

  return (
    <main className="bg-background">
      <SiteHeader lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <Rooms lang={lang} />
      <About lang={lang} />
      <div id="location" />
      <Gallery lang={lang} />
      <Reviews lang={lang} />
      <span id="booking" />
      <BookingContacts lang={lang} />
      <SiteFooter lang={lang} />
    </main>
  )
}
