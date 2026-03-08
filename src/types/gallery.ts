export interface GalleryItem {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  slug: string;
}