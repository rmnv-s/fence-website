// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  compress: true,
};

module.exports = {
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
