"use client";

import CardListWrapper from "@/components/CardListWrapper/CardListWrapper";
import Container from "@/components/Container/Container";
import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import JournalSection from "@/components/JournalSection/JournalSection";
import PodcastSection from "@/components/PodcastSection/PodcastSection";
import ReviewSlider from "@/components/ReviewSlider/ReviewSlider";
import TrendingCard from "@/components/TrendingCard.tsx/TrendingCard.tsx";
import { Heading } from "@/components/ui";
import type { CardItem } from "@/types";

const featuredCardList: CardItem[] = [
  {
    id: "1",
    imgUrl: "/images/car_1.png",
    title: "Real Estate",
    listingsCount: "586,437",
  },
  {
    id: "2",
    imgUrl: "/images/car_2.jpg",
    title: "Jet",
    listingsCount: "586,437",
  },
  {
    id: "3",
    imgUrl: "/images/car_3.jpg",
    title: "Cars",
    listingsCount: "586,437",
  },
  {
    id: "4",
    imgUrl: "/images/car_4.jpg",
    title: "Yatch",
    listingsCount: "586,437",
  },
  {
    id: "5",
    imgUrl: "/images/car_4.jpg",
    title: "Yatch",
    listingsCount: "586,437",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white-900 font-serif">
        <HeroSection />
        <Container>
          <Heading level={1} className="mb-8">
            Featured Categories
          </Heading>
          <CardListWrapper className="mb-10">
            {featuredCardList.slice(0, 4).map((card) => (
              <FeaturedCard
                key={card.id}
                imageUrl={card.imgUrl}
                title={card.title}
                listingsCount={card.listingsCount}
              />
            ))}
          </CardListWrapper>
        </Container>
        <Container>
          <Heading level={1} className="mb-8">
            Trending
          </Heading>
          <CardListWrapper className="mb-10 lg:grid-cols-5">
            {featuredCardList.map((card) => (
              <TrendingCard
                key={card.id}
                imageUrl={card.imgUrl}
                location="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus animi obcaecati vel sunt vitae perferendis consequatur at cupiditate ea dolorem."
                price="$8.9 billion"
              />
            ))}
          </CardListWrapper>
        </Container>
        <Container>
          <JournalSection />
        </Container>
        <Container>
          <PodcastSection />
        </Container>
        <ReviewSlider />
        <Footer />
      </main>
    </>
  );
}
