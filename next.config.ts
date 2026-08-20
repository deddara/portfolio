import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // статический экспорт в out/, раздаётся Cloudflare Worker'ом как Static Assets
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
