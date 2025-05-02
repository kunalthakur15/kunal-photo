
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

// Sample data for the galleries
export const galleryCategories: GalleryCategory[] = [
  {
    id: "landscapes",
    title: "Landscapes",
    description: "Breathtaking views of nature's beauty",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        alt: "Body of water surrounded by trees",
        width: 1200,
        height: 800,
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        alt: "Mountain hit by sun rays",
        width: 1200,
        height: 900,
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
        alt: "Concrete bridge and waterfalls",
        width: 800,
        height: 1200,
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        alt: "Bird's eye view of green mountains",
        width: 1200,
        height: 700,
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        alt: "Deer beside trees and mountain",
        width: 900,
        height: 1200,
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        alt: "River between mountains under white clouds",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "seascapes",
    title: "Seascapes",
    description: "The beauty and power of ocean views",
    coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        alt: "Ocean wave at beach",
        width: 1200,
        height: 900,
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
        alt: "Sunset over ocean",
        width: 1200,
        height: 800, 
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1509477887414-681937645173",
        alt: "Rocky coast with waves",
        width: 800,
        height: 1200,
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1",
        alt: "Wave breaking on shore",
        width: 1200,
        height: 700,
      },
    ],
  },
  {
    id: "cities",
    title: "Urban Views",
    description: "Cityscapes and urban architecture",
    coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        alt: "City skyline at dusk",
        width: 1200,
        height: 800,
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
        alt: "Manhattan skyline",
        width: 1200,
        height: 700,
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
        alt: "City street with red umbrellas",
        width: 800,
        height: 1200,
      },
    ],
  },
  {
    id: "mountains",
    title: "Mountains",
    description: "Majestic peaks around the world",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        alt: "Snowy mountain peak",
        width: 1200,
        height: 800,
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
        alt: "Mountain range with clouds",
        width: 1200,
        height: 800,
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        alt: "Starry night over mountains",
        width: 1200,
        height: 700,
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        alt: "Mountain reflection in lake",
        width: 1200,
        height: 800,
      },
    ],
  },
];

// Images for the hero slider
export const sliderImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Body of water surrounded by trees",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain hit by sun rays",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Ocean wave at beach",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    alt: "Snowy mountain peak",
  },
];
