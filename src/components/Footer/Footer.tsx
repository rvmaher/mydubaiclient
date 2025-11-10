import type React from "react";
import {
	FaFacebook as Facebook,
	FaInstagram as Instagram,
	FaLinkedin as Linkedin,
	FaPinterest as Pinterest,
	FaTwitter as Twitter,
	FaYoutube as Youtube,
} from "react-icons/fa";


interface FooterLink {
	label: string;
	href: string;
}

interface FooterColumn {
	title: string;
	links: FooterLink[];
}

const companyLinks: FooterColumn = {
	title: "JAMESEDITION",
	links: [
		{ label: "About", href: "#" },
		{ label: "Contact", href: "#" },
		{ label: "Careers", href: "#" },
		{ label: "Help & FAQ", href: "#" },
		{ label: "Terms", href: "#" },
		{ label: "Privacy", href: "#" },
	],
};

const categoryLinks: FooterColumn = {
	title: "CATEGORIES",
	links: [
		{ label: "Real Estate", href: "#" },
		{ label: "Cars", href: "#" },
		{ label: "Yachts", href: "#" },
		{ label: "Jets", href: "#" },
		{ label: "Helicopters", href: "#" },
		{ label: "Watches", href: "#" },
		{ label: "Jewelry", href: "#" },
		{ label: "Extraordinaire", href: "#" },
		{ label: "Lifestyle", href: "#" },
	],
};

const catalogLinks: FooterColumn = {
	title: "CATALOG",
	links: [
		{ label: "All Brands", href: "#" },
		{ label: "All Businesses", href: "#" },
	],
};

const businessLinks: FooterColumn = {
	title: "FOR BUSINESS",
	links: [
		{ label: "Sell With Us", href: "#" },
		{ label: "Partner", href: "#" },
		{ label: "Linking", href: "#" },
	],
};


const FooterLinkColumn: React.FC<FooterColumn> = ({ title, links }) => (
	<div className="mb-8">
		<h4 className="text-white text-sm font-semibold tracking-wider mb-5">
			{title}
		</h4>
		<ul className="space-y-3">
			{links.map((link) => (
				<li key={link.label}>
					<a
						href={link.href}
						className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
					>
						{link.label}
					</a>
				</li>
			))}
		</ul>
	</div>
);


const Footer: React.FC = () => {

	const linkColumns = [
		companyLinks,
		categoryLinks,
		catalogLinks,
		businessLinks,
	];


	const socialIcons: { [key: string]: React.ElementType } = {
		instagram: Instagram,
		facebook: Facebook,
		youtube: Youtube,
		twitter: Twitter,
		linkedin: Linkedin,
		pinterest: Pinterest,
	};

	return (
		<footer className="bg-[#1a1a1a] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 border-b border-gray-700 pb-10 mb-6">
					{linkColumns.map((column, index) => (
						<div
							key={column.title}
							className={`col-span-1 ${column.title === "CATEGORIES" ? "md:col-span-1" : ""}`}
						>

							{(column.title === "CATALOG" ||
								column.title === "FOR BUSINESS") &&
							index > 1 ? (
								<div className="col-span-2 md:col-span-1 flex flex-col space-y-8">
									<FooterLinkColumn {...catalogLinks} />
									<FooterLinkColumn {...businessLinks} />
								</div>
							) : (

								<FooterLinkColumn {...column} />
							)}
						</div>
					))}
				</div>


				<div className="flex flex-col md:flex-row justify-between items-center pt-2">

					<div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
						<span className="w-5 h-5 bg-gray-500 rounded-sm mr-2 flex items-center justify-center font-bold text-xs text-black">
							JE
						</span>
						<span>Copyright © 2025 JamesEdition B.V.®</span>
					</div>


					<div className="flex space-x-4 text-gray-400">
						{Object.entries(socialIcons).map(([key, IconComponent]) => (
							<a
								key={key}
								href="#"
								aria-label={key}
								className="hover:text-white transition-colors duration-200"
							>
								<IconComponent className="w-5 h-5" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
