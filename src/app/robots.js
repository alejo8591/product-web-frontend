import {userAgent} from "next/server";

export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/private', '/api', '/login']
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/']
      }
    ],
    sitemap: 'http:localhost:3000/sitemap.xml'
  }
}