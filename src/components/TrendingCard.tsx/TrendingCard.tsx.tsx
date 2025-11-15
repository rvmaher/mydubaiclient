import Image from "next/image";
import type React from "react";
import { Card, IconButton } from "../ui";

interface TrendingCardProps {
  imageUrl: string;
  price: string;
  title?: string;
  location: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  imageUrl,
  price,
  title,
  location,
}) => {
  return (
    <Card
      hover
      className="w-full max-w-xs mx-auto group cursor-pointer hover:underline"
    >
      <div className="relative w-full pt-[133%]">
        <Image
          src={imageUrl}
          alt={`${title} in ${location}`}
          fill
          className="object-cover"
        />

        <IconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <title>Favorite</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          }
          ariaLabel="Add to favorites"
          variant="secondary"
          className="absolute top-4 right-4 shadow-md text-gray-700 hover:text-red-500 hover:scale-110 transition-all duration-200"
        />
      </div>

      <div className="pt-4">
        <p className="text-md text-gray-900 mb-1 leading-tight">{price}</p>

        <p className="text-xs text-gray-700 leading-snug line-clamp-1">
          <span className="font-semibold">{title}</span> {location}
        </p>
      </div>
    </Card>
  );
};

export default TrendingCard;
