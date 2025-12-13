import { useState, useCallback } from 'react'
import { getTranslation, type Language, type TranslationKey } from '@/lib/translations'

export function useStaticTranslation() {
  const [language, setLanguage] = useState<Language>('fr')

  const t = useCallback((key: TranslationKey) => {
    return getTranslation(key, language)
  }, [language])

  const changeLanguage = useCallback((newLang: Language) => {
    setLanguage(newLang)
  }, [])

  return {
    language,
    setLanguage: changeLanguage,
    t,
  }
}
