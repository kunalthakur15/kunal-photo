import { GalleryImage } from "../data/galleryData";
import driveImages from "../data/driveImages.json";

// The folder ID from your Google Drive public folder
const FOLDER_ID = '1A9F6ZJIyZMHzj7Aswtmx6GJuBrFLm5Ma';

// Function to get the folder contents using the Google Drive folder viewer
export async function fetchGoogleDriveImages(): Promise<GalleryImage[]> {
  try {
    // Convert the JSON data to GalleryImage format
    const images: GalleryImage[] = driveImages.images.map(image => ({
      id: image.id,
      // Using the correct Google Drive direct image URL format
      src: `https://drive.google.com/thumbnail?id=${image.fileId}&sz=w1200`,
      alt: image.alt,
      width: 1200,
      height: 800
    }));

    return images;
  } catch (error) {
    console.error("Error fetching Google Drive images:", error);
    return [];
  }
} 