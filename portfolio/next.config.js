/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require("next-transpile-modules")(["@georgedoescode/spline"]);

module.exports = withTM(nextConfig);