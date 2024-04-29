/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
    images: {
      domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com'],
    },
  };
  
  export default {
    ...nextConfig,
    ...withVideos(),
};

 

  
  