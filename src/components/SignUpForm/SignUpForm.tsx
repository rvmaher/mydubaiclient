"use client";
import type React from "react";
import { FaApple, FaGoogle, FaLinkedinIn } from "react-icons/fa";

interface SignUpFormProps {
	onSwitchToSignIn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSwitchToSignIn }) => {
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

			{/* Input Fields (First name, Last name, Email) */}
			<input
				type="text"
				placeholder="First name"
				className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
			/>
			<input
				type="text"
				placeholder="Last name"
				className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
			/>
			<input
				type="email"
				placeholder="Email"
				className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
			/>

			{/* Continue Button (Black) */}
			<button
				type="submit"
				className="w-full p-3 text-white bg-black rounded-md hover:bg-gray-800 font-semibold transition duration-150 mt-4"
			>
				Continue
			</button>

			{/* Separator / Spacer */}
			<div className="border-t border-gray-100 pt-6"></div>

			{/* Log In Link */}
			<p className="text-center text-sm text-gray-500">
				Already a member?
				<button
					type="button"
					onClick={onSwitchToSignIn}
					className="font-medium text-black hover:text-gray-800 transition duration-150 ml-1"
				>
					Log in
				</button>
			</p>
		</form>
	);
};

export default SignUpForm;
