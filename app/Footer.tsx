import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
// import { TiSocialTiktok } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
      <div className="flex justify-center mb-10">
        <a href="https://www.facebook.com/pearlessencegh" className="mr-4"><FaFacebook size={32} /></a>
        <a href="https://x.com/PearlEssenceGH?t=p5KymYwte9Jhec7yqfs-Dg&s=09" className="mr-4"><FaTwitter size={32} /></a>
        <a href="https://instagram.com/pearlessencegh" className="mr-4"><FaInstagram size={32} /></a>
        <a href="https://www.linkedin.com" className="mr-4"><FaTiktok size={32} /></a>
        <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE"><FaYoutube size={32} /></a>
      </div>
      <p className="text-xl mb-4">Pearl Essence Ghana</p>
      <p className="text-sm mb-2">123 Airport street, Accra, Ghana</p>
      <p className="text-sm mb-8">Email: Biz@pearlessencegh.com | Phone: 0272696206/0544885492</p>
      <p className="text-xs">&copy; {new Date().getFullYear()} Pearl Essence Ghana. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;


 