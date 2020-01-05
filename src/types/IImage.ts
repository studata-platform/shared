export type IImage = {
  id?: string;
  src: string;
  alt: string;
  fallbackColor: string;
};

export type IImageInput = {
  src: string; // Reference to a stored file on our storage provider
  alt: string;
  fallbackColor: string;
};
