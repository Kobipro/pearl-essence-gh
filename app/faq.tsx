import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return ( 
    <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions ?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Who owns Pearl Essence Ghana?</AccordionTrigger>
            <AccordionContent>
              The visionary behind our business is Emily Parker. With a keen eye for beauty and a passion for perfumery, 
              Emily brings her expertise and creativity to curate a collection of exquisite fragrances that captivate the senses.
              Read more about our CEO here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are the perfumes you sell authentic?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We pride ourselves on offering only authentic perfumes sourced directly 
              from the manufacturers or authorized distributors. 
              Each bottle undergoes rigorous quality checks to ensure that you receive a genuine product every time you shop with us
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What brands of perfumes do you sell?
            </AccordionTrigger>
            <AccordionContent>
              We offer a curated selection of premium perfume brands, carefully chosen for their quality and uniqueness. 
              From iconic classics to niche discoveries, our collection caters to every scent aficionado&apos;s preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do we offer Support ?
            </AccordionTrigger>
            <AccordionContent>
              We offer Monday-Friday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQS;




// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"



// const FAQS = () => {
//     return ( 
//         <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
//         rounded-3xl
        
//         ">
//           <div className=" p-10 md:p-4 md:px-20">
//             <div className="text-3xl md:text-7xl font-bold text-black">
//               Have questions ?
//             </div>
//             <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
//               Get answers.
//             </div>
//             <Accordion type="single" collapsible>
//     <AccordionItem value="item-1">
//       <AccordionTrigger>Who owns Pearl Essence Ghana?</AccordionTrigger>
//       <AccordionContent>
//         The visionary behind our business is Emily Parker. With a keen eye for beauty and a passion for perfumery, 
//         Emily brings her expertise and creativity to curate a collection of exquisite fragrances that captivate the senses.
//         Read more about our CEO here.
//       </AccordionContent>
//     </AccordionItem>
//     <AccordionItem value="item-2">
//       <AccordionTrigger>Are the perfumes you sell authentic?</AccordionTrigger>
//       <AccordionContent>
//         Absolutely. We pride ourselves on offering only authentic perfumes sourced directly 
//         from the manufacturers or authorized distributors. 
//         Each bottle undergoes rigorous quality checks to ensure that you receive a genuine product every time you shop with us
//       </AccordionContent>
//     </AccordionItem>
//     <AccordionItem value="item-3">
//       <AccordionTrigger>
//    What brands of perfumes do you sell?
//       </AccordionTrigger>
//       <AccordionContent>
//          We offer a curated selection of premium perfume brands, carefully chosen for their quality and uniqueness. 
//         From iconic classics to niche discoveries, our collection caters to every scent aficionado's preferences.
//       </AccordionContent>
//     </AccordionItem>
  
//     <AccordionItem value="item-4">
//       <AccordionTrigger>
//    Do we offer Support ?
//         </AccordionTrigger>
//       <AccordionContent>
//         We offer Monday-Friday support for all our clients.
//       </AccordionContent>
//     </AccordionItem>
//   </Accordion>
  
  
//           </div>
//         </div> );
// }
 
// export default FAQS;