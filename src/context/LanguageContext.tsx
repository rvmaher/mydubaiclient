"use client";

import { createContext, useContext } from "react";

type Dictionary = {
  products: {
    cart: string;
  };
  auth: {
    signIn: string;
    signUp: string;
    welcome: string;
    createAccount: string;
    googleSignIn: string;
    googleSignUp: string;
    or: string;
    email: string;
    password: string;
    confirmPassword: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    noAccount: string;
    hasAccount: string;
  };
};

type LanguageContextType = {
  lang: "en" | "ar" | "nl";
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: "en" | "ar" | "nl";
  dict: Dictionary;
}) {
  return (
    <LanguageContext.Provider value={{ lang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
