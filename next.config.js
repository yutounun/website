/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // @see https://beta.nextjs.org/docs/configuring/static-export#configuration
  output: "export",
};

module.exports = nextConfig
