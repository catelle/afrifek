"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const staticLanguages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    // { code: 'en', label: 'English', flag: '🇬🇧' },
  ]

  const aiLanguages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* <DropdownMenuLabel className="text-xs text-muted-foreground">
          Static Translation (Fast)
        </DropdownMenuLabel> */}
        {staticLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className="cursor-pointer"
          >
            <span className={currentLanguage === lang.code ? "font-bold" : ""}>
              {lang.flag} {lang.label}
            </span>
          </DropdownMenuItem>
        ))}
        
        {/* <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          AI Translation (Powered)
        </DropdownMenuLabel>
        {aiLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className="cursor-pointer"
          >
            <span className={currentLanguage === lang.code ? "font-bold" : ""}>
              {lang.flag} {lang.label}
            </span>
          </DropdownMenuItem>
        ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
