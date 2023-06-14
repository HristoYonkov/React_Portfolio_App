import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// first get the variables from sanity manage then add .env file and add therse variables!
export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-06-014',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);