export default async function sitemap() {

    const baseUrl = "https://fritilaria.com"

    return [
        {url: baseUrl, lastModified: new Date()},
        {url: `${baseUrl}/company`, lastModified: new Date()},
        {url: `${baseUrl}/terms`, lastModified: new Date()},
        {url: `${baseUrl}/privacy`, lastModified: new Date()},
        {url: `${baseUrl}/faq`, lastModified: new Date()},
        {url: `${baseUrl}/contact-us`, lastModified: new Date()},
    ]
    
}