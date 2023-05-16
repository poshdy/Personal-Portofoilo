import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'd73d73il',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})

// const builder = imageUrlBuilder(client);

// export function urlFor(source) {
//   return builder.image(source)
// }