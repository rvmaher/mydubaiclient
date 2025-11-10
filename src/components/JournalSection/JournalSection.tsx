import Image from "next/image";
import type React from "react";

interface Article {
	date: string;
	title: string;
	summary: string;
	imageUrl?: string;
}

interface MainArticle extends Article {
	imageUrl: string;
}

const mainArticle: MainArticle = {
	date: "05 NOV 2025",
	title:
		"The Quincy Jones Estate: Music Legend’s Custom Bel Air Estate Lists for $55 Million",
	summary:
		"Suspended above Los Angeles on a rare 2.3-acre promontory in lower Bel Air, The Quincy Jones Esta...",
	imageUrl: "/images/quincy_jones_estate.jpg", // Placeholder for the large image
};

const smallArticles: Article[] = [
	{
		date: "05 NOV 2025",
		title:
			"JamesEdition Partners with Compass Luxury to Elevate Visibility for High-End Properties Across t...",
		summary:
			"November 6, 2025 — JamesEdition, the world’s leading marketplace for luxury real estate, has anno...",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1761471068620-5ecaa4780da5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600", // Placeholder for small image 1
	},
	{
		date: "05 NOV 2025",
		title:
			"St. Regis Debuts at Finca Cortesin, Costa del Sol, Marking a New Era of Branded Mediterranean Living",
		summary:
			"Few developments have captured the attention of Europe’s high-net-worth buyers quite like The St....",
		imageUrl:
			"https://images.unsplash.com/photo-1762450127876-515aed711718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1204", // Placeholder for small image 2
	},
	{
		date: "05 NOV 2025",
		title:
			"Four Automotive Milestones: Where Engineering Icons Become Investment Assets",
		summary:
			"In today’s collector-car economy, where milliseconds and production numbers define market hierarc...",
		imageUrl:
			"https://images.unsplash.com/photo-1759222973482-3c0d90dd8549?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // Placeholder for small image 3
	},
];

const SmallArticleCard: React.FC<Article> = ({
	date,
	title,
	summary,
	imageUrl,
}) => (
	<a href="#" className="flex items-start mb-6 group">
		{imageUrl && (
			<div className="flex-shrink-0 w-28 h-20 relative mr-4">
				<Image
					src={imageUrl}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-sm"
				/>
			</div>
		)}
		<div className="flex-grow">
			<p className="text-xs text-gray-500 font-semibold mb-1">{date}</p>
			<h3 className="text-base text-gray-900 font-medium leading-snug group-hover:text-gray-700 transition-colors">
				{title}
			</h3>

		</div>
	</a>
);


const JournalSection: React.FC = () => {
	return (
		<section className="py-12 md:py-16">
			<div className="max-w-7xl mx-auto">

				<h2 className="font-serif text-4xl font-normal mb-8 text-gray-900">
					The Journal
				</h2>


				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

					<div className="md:col-span-2">
						<a href="#" className="block group">
							<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md">
								<Image
									src={
										"https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
									}
									alt={mainArticle.title}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-500 group-hover:scale-[1.02]"
								/>
							</div>

							<div className="relative p-0">
								<h3 className="font-serif text-3xl md:text-4xl font-normal mt-4 text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
									{mainArticle.title}
								</h3>
								<p className="text-base text-gray-600 mt-2">
									{mainArticle.summary}
								</p>
							</div>
						</a>
					</div>


					<div className="md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
						<div className="flex flex-col">
							{smallArticles.map((article, index) => (
								<SmallArticleCard key={index} {...article} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JournalSection;
