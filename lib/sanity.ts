import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2026-05-10',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
};

export const sanityClient = createClient(config);
export const getClient = () => sanityClient;

const builder = imageUrlBuilder(config);
export const buildImageUrl = (source: any) => builder.image(source).auto('format').fit('max').quality(85);
