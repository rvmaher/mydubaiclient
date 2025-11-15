"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: "en" | "ar" | "nl") => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        className={lang === "en" ? "font-bold" : ""}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("ar")}
        className={lang === "ar" ? "font-bold" : ""}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("nl")}
        className={lang === "nl" ? "font-bold" : ""}
      >
        Nederlands
      </button>
    </div>
  );
}
