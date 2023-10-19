/** @type {import('next').NextConfig} */
const config = require("./src/amplifyconfiguration.json");

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["flowbite.com", "freesvg.org"],
  },
  trailingSlash: true,
  webpack: (config, { webpack, isServer, nextRuntime }) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === "nodejs")
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }),
      );
    return config;
  },
};
//    To prevent amplify warnings for next 13. see issue at: https://github.com/aws-amplify/amplify-js/issues/11030
module.exports = nextConfig;
