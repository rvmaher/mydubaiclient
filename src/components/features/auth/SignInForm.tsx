"use client";
import NextLink from "next/link";
import { useState } from "react";
import {
  FaEye as Eye,
  FaEyeSlash as EyeOff,
  FaApple,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button, Divider, Input, SocialButton } from "@/components/ui";

interface SignInFormProps {
  onSwitchToSignUp: () => void;
}

export default function SignInForm({ onSwitchToSignUp }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <SocialButton
        icon={FaGoogle}
        label="Continue with Google"
        onClick={() => handleSocialLogin("Google")}
      />
      <SocialButton
        icon={FaApple}
        label="Continue with Apple"
        onClick={() => handleSocialLogin("Apple")}
      />
      <SocialButton
        icon={FaLinkedinIn}
        label="Continue with LinkedIn"
        onClick={() => handleSocialLogin("LinkedIn")}
      />

      <Divider text="OR" />

      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="pr-10"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
        Continue
      </Button>

      <p className="text-center text-sm pt-2">
        <NextLink
          href="/forgot-password"
          className="font-normal text-gray-800 hover:text-black transition duration-150"
        >
          Forgot Password?
        </NextLink>
      </p>

      <Divider />

      <p className="text-center text-sm text-gray-500">
        Not a member yet?
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="font-medium text-black hover:text-gray-800 transition duration-150 ml-1"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}
