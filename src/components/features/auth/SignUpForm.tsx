"use client";
import { useState } from "react";
import { FaApple, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Button, Divider, Input, SocialButton } from "@/components/ui";

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
}

export default function SignUpForm({ onSwitchToSignIn }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <SocialButton
        icon={FaGoogle}
        label="Continue with Google"
        onClick={() => handleSocialSignUp("Google")}
      />
      <SocialButton
        icon={FaApple}
        label="Continue with Apple"
        onClick={() => handleSocialSignUp("Apple")}
      />
      <SocialButton
        icon={FaLinkedinIn}
        label="Continue with LinkedIn"
        onClick={() => handleSocialSignUp("LinkedIn")}
      />

      <Divider text="OR" />

      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
        Continue
      </Button>

      <Divider />

      <p className="text-center text-sm text-gray-500">
        Already a member?
        <button
          type="button"
          onClick={onSwitchToSignIn}
          className="font-medium text-black hover:text-gray-800 transition duration-150 ml-1"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}
