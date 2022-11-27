/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

const withTM = require("next-transpile-modules")(["@georgedoescode/spline"]);

module.exports = withTM(nextConfig);
