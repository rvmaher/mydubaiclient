'use client'

import { useLanguage } from '../../context/LanguageContext'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const { lang } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: 'en' | 'ar' | 'nl') => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPath)
  }

  return (
    <div>
      <button
        onClick={() => switchLanguage('en')}
        className={lang === 'en' ? 'font-bold' : ''}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('ar')}
        className={lang === 'ar' ? 'font-bold' : ''}
      >
        العربية
      </button>
      <button
        onClick={() => switchLanguage('nl')}
        className={lang === 'nl' ? 'font-bold' : ''}
      >
        Nederlands
      </button>
    </div>
  )
}