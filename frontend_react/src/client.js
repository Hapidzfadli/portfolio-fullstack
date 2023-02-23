import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "jujwg837",
  dataset: 'production',
  apiVersion: '2023-02-11',
  useCdn: true,
  token: "skvz2Ys5zoBXZkxk74CbDh66wOA6d9t6tgwgePnhR7ABz5WE5eFIVMSTVnxV6pP34mwe3sKO5qDvVExmlQ8CU5lvnl2WRmvuM49Chy7oqkN7FxIp52qZpl1TZog1pYYnf5SBaDcch70Q80PKuMHVhHRvpljFXWqhpGgFp6AFUy8jZoBL8b1a",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);