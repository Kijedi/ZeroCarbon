export default function sitemap() {
  const baseUrl = "https://zerocarbon.africa";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/investors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/project/EAYA`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
