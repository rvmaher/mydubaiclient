import Link from "next/link";
import { FaApple, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 as X } from "react-icons/rx";
import { getDictionary } from "../../../../dictionaries/dictionaries";


type IconComponent = React.ElementType;


export default async function SignUpPage({
	params,
}: {
	params: { lang: "en" | "ar" | "nl" };
}) {
	const { lang } = params;
	const dict = await getDictionary(lang);
	const isRTL = lang === "ar";


	const d = {
		signUp: dict.auth.signUp || "Sign up",
		createAccount: dict.auth.createAccount || "Create your account",
		googleSignUp: dict.auth.googleSignUp || "Continue with Google",
		appleSignUp: dict.auth.appleSignUp || "Continue with Apple",
		linkedInSignUp: dict.auth.linkedInSignUp || "Continue with LinkedIn",
		or: dict.auth.or || "OR",
		email: dict.auth.email || "Email",
		password: dict.auth.password || "Password",
		confirmPassword: dict.auth.confirmPassword || "Confirm Password",
		emailPlaceholder: dict.auth.emailPlaceholder || "Email",
		passwordPlaceholder: dict.auth.passwordPlaceholder || "Password",
		hasAccount: dict.auth.hasAccount || "Already a member?",
		signIn: dict.auth.signIn || "Log in",
	};


	const SocialButton: React.FC<{ icon: IconComponent; label: string }> = ({
		icon: Icon,
		label,
	}) => (
		<button
			type="button"

			className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 bg-white hover:bg-gray-50 transition duration-150 shadow-sm"
		>
			<Icon className={isRTL ? "ml-3 w-5 h-5" : "mr-3 w-5 h-5"} />
			<span className="text-base font-medium">{label}</span>
		</button>
	);

	return (

		<div className="min-h-screen flex items-center justify-center p-4 font-sans">
			<div className="w-full max-w-sm bg-white rounded-lg shadow-2xl relative">

				<Link
					href={`/${lang}/`}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
					aria-label="Close"
				>
					<X className="w-6 h-6" />
				</Link>

				<form className="space-y-4 p-8 pt-10">

					<h2 className="text-2xl font-normal text-gray-900 text-center mb-6">
						{d.signUp}
					</h2>


					<SocialButton icon={FaGoogle} label={d.googleSignUp} />
					<SocialButton icon={FaApple} label={d.appleSignUp} />
					<SocialButton icon={FaLinkedinIn} label={d.linkedInSignUp} />


					<div className="flex items-center justify-center text-gray-400 py-2">
						<div className="flex-grow border-t border-gray-200"></div>
						<span className="mx-4 text-xs tracking-wider uppercase">
							{d.or}
						</span>
						<div className="flex-grow border-t border-gray-200"></div>
					</div>


					<div>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder={d.emailPlaceholder}
							className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
							dir={isRTL ? "rtl" : "ltr"}
						/>
					</div>


					<div>
						<input
							id="password"
							name="password"
							type="password"
							required
							placeholder={d.passwordPlaceholder}
							className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
							dir={isRTL ? "rtl" : "ltr"}
						/>
					</div>


					<div>
						<input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							required
							placeholder={d.confirmPassword}
							className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-black placeholder-gray-500 text-gray-900"
							dir={isRTL ? "rtl" : "ltr"}
						/>
					</div>


					<button
						type="submit"
						className="w-full p-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none font-semibold transition duration-150 mt-4"
					>
						{d.signUp}
					</button>


					<div className="border-t border-gray-100 pt-6"></div>


					<p className="text-center text-sm text-gray-500">
						{d.hasAccount}
						<Link
							href={`/${lang}/signIn`}
							className="font-medium text-black hover:text-gray-800 transition duration-150 ml-1"
							dir={isRTL ? "rtl" : "ltr"}
						>
							{d.signIn}
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
