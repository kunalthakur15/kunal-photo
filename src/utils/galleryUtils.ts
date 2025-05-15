import galleries from '../data/galleries.json';

export interface GalleryImage {
  id: string;
  fileId: string;
  name: string;
  alt: string;
}

export interface Gallery {
  id: number;
  name: string;
  images: GalleryImage[];
}

export function getGalleryImages(): Gallery[] {
  return galleries.galleries;
} 