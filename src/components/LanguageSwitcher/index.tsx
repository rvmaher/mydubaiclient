"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: "en" | "ar" | "nl") => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const buttonClass = (isActive: boolean) =>
    cn(
      "px-3 py-1 rounded transition-colors",
      isActive
        ? "font-bold text-black bg-gray-100"
        : "text-gray-600 hover:text-black hover:bg-gray-50",
    );

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        className={buttonClass(lang === "en")}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("ar")}
        className={buttonClass(lang === "ar")}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("nl")}
        className={buttonClass(lang === "nl")}
      >
        Nederlands
      </button>
    </div>
  );
}
