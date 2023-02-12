import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "xz1cj6qr",
  dataset: 'production',
  apiVersion: '2023-02-11',
  useCdn: true,
  token: "sk7lQ6WrN5oG6ETD76UKa3xXebGCpDh25tmKQrKOCkWz9xg8O0HwvHSpr6MMF3BiPYsQpleX2Kk7sqkx6V8kJ3rp3GDnOalS5cI06biHxth1H20PHWJvmORgQFH0dOOOZ46jcPDxs9OmLFKA4ADf8t5ngLkTwkEz1Cy5iDZUbyiPmdGPI14V",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);