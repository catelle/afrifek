"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LanguageToggleProps {
  currentLanguage: "fr" | "en"
  onLanguageChange: (lang: "fr" | "en") => void
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onLanguageChange("fr")}>
          <span className={currentLanguage === "fr" ? "font-bold" : ""}>🇫🇷 Français</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLanguageChange("en")}>
          <span className={currentLanguage === "en" ? "font-bold" : ""}>🇬🇧 English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
