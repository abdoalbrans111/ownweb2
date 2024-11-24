/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const PWA_STATUS = "1"; // PWA_STATUS '1' is enabled, '0' is disabled
const environment = {
  BASE_URL: "http://127.0.0.1:8000/", // Base API URL
  PWA: PWA_STATUS,
};

const withPWA = withPWAInit({
  dest: "public", // Destination for the service worker
  // Other PWA configurations can be added here
});

const nextConfig = {
  output: 'export',
  env: environment,
  // Other Next.js configurations can be added here
};

export default parseInt(PWA_STATUS) === 1 ? withPWA(nextConfig) : nextConfig;
