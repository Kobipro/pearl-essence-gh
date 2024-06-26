"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/delivery3.png",
    quote: "Get your ordered perfumes as soon as possible when you order with us - Mubarak.",
    name: "Delivery Rider",
  },
  {
    image: "/images/delivery2.png",
    quote:
      "Get exactly what you ordered for when you order with us- Cynthia Agyeinim.",
    name: "Sales Representative",
  },

  {
    image: "/images/ceo.png",
    quote:
      "Join the Big Ghanaian Family.",
    name: "Pearl Awurakua Duah,CEO ",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Sales Everyday <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
            Hundreds of Ghanaian Customers shop with us Everyday.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
