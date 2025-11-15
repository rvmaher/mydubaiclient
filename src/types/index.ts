export interface Article {
  id: string;
  date: string;
  title: string;
  imageUrl?: string;
  summary?: string;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  title: string;
}

export interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

export interface CardItem {
  id: string;
  imgUrl: string;
  title: string;
  listingsCount: string;
}

export interface Dictionary {
  [key: string]: string;
}

export type Language = "en" | "ar" | "nl";
