export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://zerocarbon.africa/sitemap.xml",
  };
}
