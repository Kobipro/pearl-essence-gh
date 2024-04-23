import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaTruck, FaHeadset, FaStar,FaBoxOpen, FaUserAlt, FaTag  } from 'react-icons/fa';


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaTruck className="w-8 h-8 text-blue-600" /></div>,
        title: "Free Shipping",
        description:
          "Enjoy free delivery on all orders. Shop now and experience convenience at your doorstep.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaStar className="w-8 h-8 text-blue-600" /></div>,
        title: "Quality Assurance",
        description:
          "Shop with confidence knowing each scent is carefully selected for its authenticity and excellence. Experience luxury without compromise.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaHeadset className="w-8 h-8 text-blue-600" /></div>,
        title: "Support",
        description:
          "Expert support available whenever you need it. Get personalized assistance for all your fragrance inquiries.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaBoxOpen className="w-8 h-8 text-blue-600" /></div>,
        title: "Wide Selection",
        description:
          "Explore our vast collection of scents from popular brands to exclusive editions. Find the perfect fragrance to match your style and mood.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaUserAlt className="w-8 h-8 text-blue-600" /></div>,
        title: "Personalized Service",
        description:
          "Receive personalized recommendations and expert advice from our fragrance specialists. Let us help you discover a scent that reflects your unique personality.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><FaTag  className="w-8 h-8 text-blue-600" /></div>,
        title: " Exclusive Offers",
        description:
          "Unlock exclusive deals and discounts on our premium fragrances. Join our community and be the first to know about special promotions and limited-time offers.",
     
      },
];
