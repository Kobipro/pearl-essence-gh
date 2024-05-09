import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from 'react-icons/fi';

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void; // Add scrollToServices function to props
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  return (
    <motion.div
      className="
    w-screen
    h-screen
    bg-gradient-to-b 
    from-neutral-50
     to-neutral-400 
     bg-opacity-50
     text-slate-300
     p-6
     space-y-4
     absolute
     top-28
     left-0
     right-0
     z-50
     rounded-t-3xl
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link href="https://pearlessencegh.com/" className="text-black text-2xl">
           Main Store<span className="ml-2">
    <FiArrowUpRight className="kink-icon" />
        </span>

        </Link>
        <Link href={"https://pearlessencegh.com/?product_tag=affordable&filter=1"} className="text-black text-2xl">
          Affordables
        </Link>

        <Link href={"https://pearlessencegh.com/?product_tag=discount&filter=1"} className="text-black text-2xl">
          Discounts
        </Link>
        <Link href={"https://pearlessencegh.com/?product_tag=travel-size&filter=1"} className="text-black text-2xl">
          Travel size
        </Link>
        <Link href={"https://pearlessencegh.com/?product_tag=body-cream&filter=1"} className="text-black text-2xl">
          Body creams
        </Link>
         <Link href={"https://pearlessencegh.com/?product_tag=perfume-oils&filter=1"} className="text-black text-2xl">
          Perfume oil
        </Link>
         <Link href={"https://pearlessencegh.com/?product_tag=cosmetics&filter=1"} className="text-black text-2xl">
          Cosmetics
        </Link>
       {/* <div onClick={scrollToTestimonials} className="text-black text-2xl">
          Testimonials
        </div>

         Add onClick handler to Services link 
        <div onClick={scrollToServices}   className=" text-black text-2xl">
          Services
        </div>*/}
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
