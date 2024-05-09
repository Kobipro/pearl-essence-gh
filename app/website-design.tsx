'use client'

import Image from "next/image"
import { FiArrowRight } from 'react-icons/fi';
import Link from "next/link";



const WebsiteDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
     Inspired <br /> Collections
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
    Discover our diverse range of scents, perfect for any occasion. {/*Whether its a day at the gym, 
    a serene moment at church, the hustle of school, 
    or the professionalism of the office,*/} Our fragrances complement every facet of your life.
        </p>
        </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/don1.webp" alt=""/>
        </div>
        </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/don2.webp" alt=""/>
        </div>
        </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/don3.webp" alt=""/>
        </div>
        </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/don4.webp" alt=""/>
        </div>
       </div>
     </div>
     <div className="flex justify-center mb-8">
        <Link
            href={"https://pearlessencegh.com/?product_tag=unisex-perfume&filter=1"}
            className="bg-white text-black px-8 py-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800 flex items-center"
        >
            View more products
       <FiArrowRight className="kink-icon ml-2" />
     </Link>
  </div>
    </div> );
}
 
export default WebsiteDesign;








