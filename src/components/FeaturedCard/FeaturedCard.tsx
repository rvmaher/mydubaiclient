import Image from "next/image";
import type React from "react";
import { IoIosArrowRoundForward as ArrowRoundForwardIcon } from "react-icons/io";
import { Card } from "../ui";

interface FeaturedCardProps {
  imageUrl: string;
  title: string;
  listingsCount: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  imageUrl,
  title,
  listingsCount,
}) => {
  return (
    <Card hover className="relative w-full max-w-sm mx-auto shadow-lg">
      <div className="relative w-full pt-[133%] overflow-hidden group cursor-pointer">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-102"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h2 className="font-serif text-xl font-normal mb-2 leading-tight drop-shadow-md">
          {title}
        </h2>

        <p className="text-xs font-semibold tracking-wide uppercase opacity-80 drop-shadow-sm">
          {listingsCount} LISTINGS
        </p>

        <div className="absolute bottom-6 right-6 p-2 text-white text-2xl group-hover:bg-opacity-30 transition-all duration-300">
          <ArrowRoundForwardIcon />
        </div>
      </div>
    </Card>
  );
};

export default FeaturedCard;
