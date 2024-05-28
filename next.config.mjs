/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: '@use "@/app/css/_colors.scss" as *;'
    }
};

export default nextConfig;
