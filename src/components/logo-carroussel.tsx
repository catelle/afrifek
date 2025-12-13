"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { getTranslation, type Language } from '@/lib/translations'

// Component to load images from /public
const LogoImage = ({ src, size = 32 }: { src: string; size?: number }) => {
  return (
    <img
      src={src} 
      alt={src}
      width={size}
      height={size}
      className="object-contain"
    />
  )
}

// Your real logo list
const logos = [
  { name: "MINESUP", src: "/logo-minesup.png", href: "https://www.minesup.gov.cm" },
  { name: "AFRIMVOE", src: "/logo-afrim.png", href: "http://afrimvoe.net/" },
  { name: "CAMES", src: "/logo-cames.png", href: "https://www.lecames.org" },
  { name: "MINSANTE", src: "/logo-minsante.png", href: "https://www.minsante.cm" },
  { name: "MINESUP", src: "/logo-minesup.png", href: "https://www.minesup.gov.cm" },
  { name: "AFRIMVOE", src: "/logo-afrim.png", href: "http://afrimvoe.net/" },
  { name: "CAMES", src: "/logo-cames.png", href: "https://www.lecames.org" },
  { name: "MINSANTE", src: "/logo-minsante.png", href: "https://www.minsante.cm" },
] as const

interface LogoCarouselProps {
  language: Language;
}

export function LogoCarousel({ language }: LogoCarouselProps) {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
         
          <Badge variant="outline" className="mb-4 text-[#4d7c0f]">{getTranslation('ourPartners', language)}</Badge>

          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-8 sm:space-x-12">

                {/* First scrolling set */}
                {logos.map((logo, index) => (
                  <a
                    key={`first-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Card className="flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent cursor-pointer">
                      <div className="flex items-center gap-3">
                        <LogoImage src={logo.src} size={36} />
                        <span className="text-foreground text-lg font-semibold whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    </Card>
                  </a>
                ))}

                {/* Duplicate set for infinite loop */}
                {logos.map((logo, index) => (
                  <a
                    key={`second-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Card className="flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent cursor-pointer">
                      <div className="flex items-center gap-4">
                        <LogoImage src={logo.src} size={36} />
                        <span className="text-foreground text-lg font-semibold whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    </Card>
                  </a>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
