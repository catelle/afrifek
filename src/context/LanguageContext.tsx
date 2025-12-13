"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { type Language } from '@/lib/translations'

interface LanguageContextType {
  staticLanguage: Language
  setStaticLanguage: (lang: Language) => void
  useAITranslation: boolean
  setUseAITranslation: (use: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [staticLanguage, setStaticLanguage] = useState<Language>('fr')
  const [useAITranslation, setUseAITranslation] = useState(false)

  return (
    <LanguageContext.Provider
      value={{
        staticLanguage,
        setStaticLanguage,
        useAITranslation,
        setUseAITranslation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}
