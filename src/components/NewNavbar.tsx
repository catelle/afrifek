"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Mail } from "lucide-react"
import LanguageDropdown from "./LanguageDropdown"
import MegaMenu from "./MegaMenu"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { getTranslation } from "@/lib/translations"




// ---------------------------
// Navbar Component
// ---------------------------
interface NavbarProps {
  setActiveView: (v: string) => void
  setResourceFilter: (v: string) => void
  onContactClick: () => void
  language: "fr" | "en"
  setLanguage: (l: "fr" | "en") => void
  setShowSubmit: (show: boolean) => void
}

export default function AfriNavbar({ setActiveView, setResourceFilter, onContactClick, language, setLanguage, setShowSubmit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const resourcesMenu = [
    {
      title: getTranslation('discoverResources', language),
      items: [
        { label: getTranslation('journalsMenu', language), description: getTranslation('journalsDesc', language), filter: "Journal" },
        { label: getTranslation('institutionsMenu', language), description: getTranslation('institutionsDesc', language), filter: "institution" },
        { label: getTranslation('blogsMenu', language), description: getTranslation('blogsDesc', language), filter: "blog" },
        { label: getTranslation('universitiesMenu', language), description: getTranslation('universitiesDesc', language), filter: "university" },
        { label: getTranslation('articlesMenu', language), description: getTranslation('articlesDesc', language), filter: "article" },
        { label: getTranslation('booksMenu', language), description: getTranslation('booksDesc', language), filter: "ouvrage" },
        { label: getTranslation('publishersMenu', language), description: getTranslation('publishersDesc', language), filter: "editeur" },
      ],
    },
  ]

  const howToMenu = [
    {
      title: getTranslation('guidesTutorials', language),
      items: [
        { label: getTranslation('userGuide', language), description: getTranslation('userGuideDesc', language), href: "/guide" },
        { label: getTranslation('videoTutorial', language), description: getTranslation('videoTutorialDesc', language), href: "#howto-video" },
        { label: getTranslation('faq', language), description: getTranslation('faqDesc', language), href: "/support" },
      ],
    },
  ]

  const supportMenu = [
    {
      title: getTranslation('supportMenu', language),
      items: [
        { label: getTranslation('helpCenter', language), description: getTranslation('helpCenterDesc', language), href: "/support" },
        { label: getTranslation('platformDoc', language), description: getTranslation('platformDocDesc', language), href: "/guide" },
        { label: getTranslation('reportIssue', language), description: getTranslation('reportIssueDesc', language), href: "/support#contact" },
      ],
    },
  ]

  const homeMenu = [
    {
      title: language === 'fr' ? 'Sections de la page' : 'Page Sections',
      items: [
        { label: language === 'fr' ? 'Notre Mission' : 'Our Mission', description: language === 'fr' ? 'Comprendre notre mission' : 'Understand our mission', href: "#mission" },
        { label: language === 'fr' ? 'Notre Vision' : 'Our Vision', description: language === 'fr' ? 'Découvrez notre vision' : 'Discover our vision', href: "#vision" },
        { label: language === 'fr' ? 'Statistiques' : 'Statistics', description: language === 'fr' ? 'Voir nos statistiques' : 'View our statistics', href: "#stats" },
        { label: language === 'fr' ? 'À Propos' : 'About Us', description: language === 'fr' ? 'En savoir plus sur nous' : 'Learn more about us', href: "#about" },
        { label: language === 'fr' ? 'Contact' : 'Contact', description: language === 'fr' ? 'Nous contacter' : 'Contact us', href: "#contact" },
      ],
    },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleResourceSelect = (item: any) => {
    if (item.filter) setResourceFilter(item.filter)
    setActiveView("resources")
    setMobileOpen(false)
    // Close navigation menu
    document.body.click()
  }

  const handleLinkClick = (href: string | any) => {
    const hrefStr = typeof href === 'string' ? href : href?.href || ''
    if (hrefStr.startsWith("/")) {
      window.location.href = hrefStr
    } else if (hrefStr.startsWith("#")) {
      // Navigate to home first if not already there
      setActiveView("home")
      // Wait for view to change then scroll
      setTimeout(() => {
        const el = document.querySelector(hrefStr)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
    setMobileOpen(false)
    // Close navigation menu
    document.body.click()
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "bg-amber-400 dark:bg-slate-800 text-white shadow-sm" : "bg-white dark:bg-slate-900"}`}>
      <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between h-14 sm:h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <img src="/logo-afri-removebg-preview.png" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="font-bold text-lg sm:text-xl text-[#4d7c0f] dark:text-amber-500">Afri-Fek</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium px-4 py-2 text-[#4d7c0f] dark:text-slate-200 hover:text-[#4d7c0f] dark:hover:text-amber-500">{getTranslation('home', language)}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-white dark:bg-slate-800">
                  {homeMenu[0].items.map((item) => (
                    <div key={item.label} onClick={() => handleLinkClick(item.href)} className="cursor-pointer hover:bg-[#4d7c0f] p-2 rounded group">
                      <div className="font-medium text-[#4d7c0f] group-hover:text-white">{item.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white">{item.description}</div>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium px-4 py-2 text-[#4d7c0f] dark:text-slate-200 hover:text-[#4d7c0f] dark:hover:text-amber-500">{getTranslation('resources', language)}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-white dark:bg-slate-800">
                  {resourcesMenu[0].items.map((item) => (
                    <div key={item.label} onClick={() => handleResourceSelect(item)} className="cursor-pointer hover:bg-[#4d7c0f] p-2 rounded group">
                      <div className="font-medium text-[#4d7c0f] group-hover:text-white">{item.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white">{item.description}</div>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium px-4 py-2 text-[#4d7c0f] dark:text-slate-200 hover:text-[#4d7c0f] dark:hover:text-amber-500">{getTranslation('guide', language)}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-white dark:bg-slate-800">
                  {howToMenu[0].items.map((item) => (
                    <div key={item.label} onClick={() => handleLinkClick(item.href)} className="cursor-pointer hover:bg-[#4d7c0f] p-2 rounded group">
                      <div className="font-medium text-[#4d7c0f] group-hover:text-white">{item.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white">{item.description}</div>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium px-4 py-2 text-[#4d7c0f] dark:text-slate-200 hover:text-[#4d7c0f] dark:hover:text-amber-500">{getTranslation('support', language)}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-white dark:bg-slate-800">
                  {supportMenu[0].items.map((item) => (
                    <div key={item.label} onClick={() => handleLinkClick(item.href)} className="cursor-pointer hover:bg-[#4d7c0f] p-2 rounded group">
                      <div className="font-medium text-[#4d7c0f] group-hover:text-white">{item.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white">{item.description}</div>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 font-medium py-2 text-base cursor-pointer text-[#4d7c0f] dark:text-slate-200 hover:text-[#4d7c0f] dark:hover:text-amber-500" onClick={() => setShowSubmit(true)}>
                {getTranslation('submitResource', language)}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="hidden xl:flex items-center gap-4">
          {/* <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} /> */}
          {/* <ThemeToggle /> */}
          <Button onClick={onContactClick} className="flex items-center gap-2 bg-[#fbbf24] dark:bg-amber-600 text-[#4d7c0f] dark:text-white cursor-pointer hover:bg-amber-500">
            <Mail className="h-4 w-4"/> {getTranslation('contact', language)}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} /> */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

          <SheetContent side="right" className="w-full sm:w-80 p-4 bg-white dark:bg-slate-900 overflow-y-auto">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-gray-900 dark:text-white">Afri-Fek</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">
                <button onClick={() => { setActiveView("home"); setMobileOpen(false); }} className="py-2 text-left font-medium">{getTranslation('home', language)}</button>

                <p className="font-semibold mt-2 text-gray-900 dark:text-white">{getTranslation('resources', language)}</p>
                {resourcesMenu[0].items.map((item) => (
                  <button key={item.label} className="block py-1 pl-3 text-left" onClick={() => handleResourceSelect(item)}>{item.label}</button>
                ))}

                <p className="font-semibold mt-2 text-gray-900 dark:text-white">{getTranslation('guide', language)}</p>
                {howToMenu[0].items.map((item) => (
                  <button key={item.label} className="block py-1 pl-3 text-left" onClick={() => handleLinkClick(item.href)}>{item.label}</button>
                ))}

                <p className="font-semibold mt-2 text-gray-900 dark:text-white">{getTranslation('support', language)}</p>
                {supportMenu[0].items.map((item) => (
                  <button key={item.label} className="block py-1 pl-3 text-left" onClick={() => handleLinkClick(item.href)}>{item.label}</button>
                ))}
                <button onClick={() => handleLinkClick('/favoris')} className="py-2 text-left font-medium">Mes Favoris</button>
                <button onClick={() => { setShowSubmit(true); setMobileOpen(false); }} className="py-2 text-left font-medium">{getTranslation('submitResource', language)}</button>

                <Button onClick={onContactClick} className="mt-4 bg-[#fcd34d] hover:bg-amber-400 text-white flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {getTranslation('contact', language)}
                </Button>


              </div>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
