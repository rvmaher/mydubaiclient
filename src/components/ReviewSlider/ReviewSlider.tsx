"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft as ChevronLeftIcon,
  FaChevronRight as ChevronRightIcon,
} from "react-icons/fa6";

interface Review {
  id: number;
  text: string;
  author: string;
  title: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "I have been assisting private owners with buying and selling exotics through my brokerage service since 2004 when I departed from Lamborghini franchised dealer. I have known about JamesEdition for many years, although I continued to use the old sources of advertising. I recently started advertising with JamesEdition, and I have just sold a low mileage Fayence Yellow CGT and also a very special Lexus LFA Nurburgring for a couple good clients.",
    author: "Brian Albertson",
    title: "Exotic Car Search, Billings, MO",
  },
  {
    id: 2,
    text: "The quality of leads we receive from JamesEdition is consistently high. Their platform attracts serious high-net-worth individuals, which translates directly into successful sales. It’s an indispensable tool for our most exclusive listings.",
    author: "Sophia Laurent",
    title: "Luxury Property Group, Paris, France",
  },
  {
    id: 3,
    text: "Advertising my high-end watch collection was seamless. The interface is elegant, and the reach is truly global. I quickly found a buyer who appreciated the craftsmanship as much as I did. Highly recommended for the serious seller.",
    author: "Marcus Chen",
    title: "Private Collector, Singapore",
  },
];

const ReviewSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const totalReviews = reviews.length;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 40,
      });
    }
  }, [index, x]);

  const goToPrev = () => {
    setIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => Math.min(totalReviews - 1, prev + 1));
  };

  return (
    <section className="py-12 bg-gray-50 flex justify-center">
      <div className="w-full px-4 sm:px-6">
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="shrink-0 w-full flex justify-center p-4"
              >
                <div className="max-w-3xl text-center">
                  <blockquote className="text-md italic leading-relaxed text-gray-700 mb-8">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-600 mt-1">{review.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-6">
          <button
            onClick={goToPrev}
            disabled={index === 0}
            className={`transition-opacity duration-200 ${index === 0 ? "opacity-40 cursor-not-allowed" : "opacity-80 hover:opacity-100"}`}
            aria-label="Previous review"
          >
            <ChevronLeftIcon size={24} className="text-gray-900" />
          </button>

          <span className="text-sm font-medium text-gray-700 tracking-wider">
            {index + 1} / {totalReviews}
          </span>

          <button
            onClick={goToNext}
            disabled={index === totalReviews - 1}
            className={`transition-opacity duration-200 ${index === totalReviews - 1 ? "opacity-40 cursor-not-allowed" : "opacity-80 hover:opacity-100"}`}
            aria-label="Next review"
          >
            <ChevronRightIcon size={24} className="text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
