"use client"

import { useEffect, useState } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function SiteHeader({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (l: Lang) => void
}) {
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#rooms", label: t.rooms },
    { href: "#about", label: t.about },
    { href: "#location", label: t.location },
    { href: "#reviews", label: t.reviews },
    { href: "#contacts", label: t.contacts },
  ]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#top"
          className={cn(
            "flex items-center gap-2 font-serif text-xl font-semibold tracking-tight transition-colors md:text-2xl",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          <Leaf className="size-5 text-secondary" strokeWidth={1.5} />
          Gloria Apartments
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-foreground/80" : "text-background/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} scrolled={scrolled} />
          <a
            href="#contacts"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:inline-flex"
          >
            {t.book}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-background hover:bg-background/10",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/40 py-3 text-foreground/80 transition-colors last:border-0 hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            {t.book}
          </a>
        </nav>
      </div>
    </header>
  )
}

function LangSwitch({
  lang,
  setLang,
  scrolled,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  scrolled: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full p-0.5 text-xs font-semibold transition-colors",
        scrolled ? "bg-muted" : "bg-background/15",
      )}
    >
      {(["uk", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2.5 py-1.5 uppercase transition-colors",
            lang === l
              ? "bg-primary text-primary-foreground"
              : scrolled
                ? "text-foreground/70 hover:text-foreground"
                : "text-background/90 hover:text-background",
          )}
        >
          {l === "uk" ? "UA" : "EN"}
        </button>
      ))}
    </div>
  )
}
