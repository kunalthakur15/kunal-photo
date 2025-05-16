import galleries from '../data/galleries.json';

export interface GalleryImage {
  id: number | string;
  src?: string;
  fileId?: string;
  lightboxSrc?: string;
  alt: string;
  width: number;
  height: number;
  name?: string;
}

export interface Gallery {
  id: number;
  name: string;
  images: GalleryImage[];
}

export function getGalleryImages(): Gallery[] {
  // Add default width and height to images
  return galleries.galleries.map(gallery => ({
    ...gallery,
    images: gallery.images.map(image => ({
      ...image,
      width: 1200,
      height: 800
    }))
  }));
} 