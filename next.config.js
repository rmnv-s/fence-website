// /** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    compress: true,
};

// module.exports = nextConfig;
module.exports = {
    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
};

/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//   // output: 'export',
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// };
//
// module.exports = nextConfig;
