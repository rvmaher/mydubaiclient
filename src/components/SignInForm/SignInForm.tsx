"use client";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import {
	FaEye as Eye,
	FaEyeSlash as EyeOff,
	FaApple,
	FaGoogle,
	FaLinkedinIn,
} from "react-icons/fa";

interface SignInFormProps {
	onSwitchToSignUp: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSwitchToSignUp }) => {
	const [showPassword, setShowPassword] = useState(false);

	const SocialButton: React.FC<{ icon: React.ElementType; label: string }> = ({
		icon: Icon,
		label,
	}) => (
		<button
			type="button"
			className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 bg-white hover:bg-gray-50 transition duration-150 shadow-sm"
		>
			<Icon className="mr-3 w-5 h-5" />
			<span className="text-base font-medium">{label}</span>
		</button>
	);

	return (
		<form className="space-y-4">
			{/* Social Login Buttons */}
			<SocialButton icon={FaGoogle} label="Continue with Google" />
			<SocialButton icon={FaApple} label="Continue with Apple" />
			<SocialButton icon={FaLinkedinIn} label="Continue with LinkedIn" />

			{/* OR Divider */}
			<div className="flex items-center justify-center text-gray-400 py-2">
				<div className="flex-grow border-t border-gray-200"></div>
				<span className="mx-4 text-xs tracking-wider uppercase">OR</span>
				<div className="flex-grow border-t border-gray-200"></div>
			</div>

			{/* Email Input */}
			<input
				type="email"
				placeholder="Email"
				className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
			/>

			{/* Password Input with Eye Icon */}
			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					placeholder="Password"
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

			{/* Continue Button (Black) */}
			<button
				type="submit"
				className="w-full p-3 text-white bg-black rounded-md hover:bg-gray-800 font-semibold transition duration-150 mt-4"
			>
				Continue
			</button>

			{/* Forgot Password Link */}
			<p className="text-center text-sm pt-2">
				<Link
					href="/forgot-password"
					className="font-normal text-gray-800 hover:text-black transition duration-150"
				>
					Forgot Password?
				</Link>
			</p>

			{/* Separator / Spacer */}
			<div className="border-t border-gray-100 pt-6"></div>

			{/* Sign Up Link */}
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
};

export default SignInForm;
