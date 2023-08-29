import { StaticImageData } from 'next/image';

export type ImageLink = {
  src: StaticImageData;
  alt: string;
  link: string;
};
