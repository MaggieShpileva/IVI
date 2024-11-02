/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: "/IVI",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "avatars.mds.yandex.net",
      "www.kinopoisk.ru",
      "st.kp.yandex.net",
      "kinopoiskapiunofficial.tech",
      "widgets.kinopoisk.ru",
      "www.themoviedb.org",
      "img02.rl0.ru",
      "ic.pics.livejournal.com",
      "seeklogo.com",
      "static.vl.ru",
      "thumbs.dfs.ivi.ru",
      "i0.wp.com",
      "static.okko.tv",
      "images.kinorium.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kinopoisk.ru",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
