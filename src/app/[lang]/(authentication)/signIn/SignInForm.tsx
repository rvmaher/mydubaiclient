"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaEye as Eye,
  FaEyeSlash as EyeOff,
  FaApple,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { RxCross2 as X } from "react-icons/rx";
import { signIn } from "@/utils/auth";

type Dictionary = {
  auth: {
    signIn: string;
    welcome: string;
    googleSignIn: string;
    appleSignIn: string;
    linkedInSignIn: string;
    or: string;
    email: string;
    password: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    forgotPassword: string;
    continue: string;
    notMember: string;
    signUp: string;
  };
};

export default function SignInForm({
  dict,
  lang,
  isRTL,
  onClose,
}: {
  dict: Dictionary;
  lang: string;
  isRTL: boolean;
  onClose: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const d = {
    ...dict.auth,
    signIn: dict.auth.signIn || "Log in",
    googleSignIn: dict.auth.googleSignIn || "Continue with Google",
    appleSignIn: dict.auth.appleSignIn || "Continue with Apple",
    linkedInSignIn: dict.auth.linkedInSignIn || "Continue with LinkedIn",
    continue: dict.auth.continue || "Continue",
    forgotPassword: dict.auth.forgotPassword || "Forgot Password?",
    notMember: dict.auth.notMember || "Not a member yet?",
    signUp: dict.auth.signUp || "Sign up",
  };

  const SocialButton: React.FC<{
    icon: React.ElementType;
    label: string;
    onClick: () => void;
  }> = ({ icon: Icon, label, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 bg-white hover:bg-gray-50 transition duration-150 shadow-sm"
    >
      <Icon className={isRTL ? "ml-3 w-5 h-5" : "mr-3 w-5 h-5"} />
      <span className="text-base font-medium">{label}</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-50">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <form className="space-y-4 p-8 pt-10">
          <h2 className="text-2xl font-normal text-gray-900 text-center mb-6">
            {d.signIn}
          </h2>

          <SocialButton
            icon={FaGoogle}
            label={d.googleSignIn}
            onClick={() => signIn.google()}
          />
          <SocialButton
            icon={FaApple}
            label={d.appleSignIn}
            onClick={() => signIn.apple()}
          />
          <SocialButton
            icon={FaLinkedinIn}
            label={d.linkedInSignIn}
            onClick={() => signIn.linkedin()}
          />

          <div className="flex items-center justify-center text-gray-400 py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-xs tracking-wider uppercase">
              {d.or}
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={dict.auth.emailPlaceholder || "Email"}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
          />

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder={dict.auth.passwordPlaceholder || "Password"}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none font-semibold transition duration-150 mt-4"
            onClick={(e) => {
              e.preventDefault();
              signIn.email({
                email: "pratik@gmail.com",
                password: "prateek@123",
              });
            }}
          >
            {d.continue}
          </button>

          <p className="text-center text-sm">
            <Link
              href={`/${lang}/forgot-password`}
              className="font-normal text-gray-800 hover:text-black transition duration-150"
            >
              {d.forgotPassword}
            </Link>
          </p>

          <div className="border-t border-gray-100 pt-6"></div>

          <p className="text-center text-sm text-gray-500">
            {d.notMember}
            <Link
              href={`/${lang}/signUp`}
              className="font-medium text-black hover:text-gray-800 transition duration-150 ml-1"
            >
              {d.signUp}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
