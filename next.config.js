/** @type {import('next').NextConfig} */
const nextConfig = {
  mode: "development",
  experimental: {
    appDir: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home?lang=ru",
        permanent: false,
      },
      {
        source: "/ru",
        destination: "/home",
        locale: false,
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,

  images: {
    domains: [
      "avatars.mds.yandex.net",
      "www.kinopoisk.ru",
      "st.kp.yandex.net",
      "kinopoiskapiunofficial.tech",
      "widgets.kinopoisk.ru",
      "www.themoviedb.org",
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
