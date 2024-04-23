"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I recently had to return a perfume that didn't suit my taste, and the return process was so easy! The customer service team was understanding and processed my refund promptly. I'm impressed by their commitment to customer satisfaction",
    name: "Damon Adoko",
    title: "Kasoa",
  },
  {
    quote:
      "As someone who is cautious about buying perfumes online, I was relieved to receive an authentic product from this shop. The perfume I ordered smelled exactly as I expected, and I love knowing that I can trust the quality of their products.",
    name: "Michael Nyamekye",
    title: "Odorkor",
  },
  {
    quote: "I placed my order online and was pleasantly surprised by how quickly it arrived. The packaging was secure, and my perfume was in perfect condition.",
    name: "Collins Antwi",
    title: "Airport Residential",
  },
  {
    quote:
      "I was blown away by the diverse selection of perfumes available at this shop. From popular designer brands to niche fragrances, they have something for everyone. I found my new signature scent here and couldn't be happier.",
    name: "Isaac Forson",
    title: "Madina",
  },
  {
    quote:
      "The customer service at this perfume shop is top-notch! The staff was incredibly knowledgeable and helped me find the perfect scent based on my preferences.",
    name: "Mary Adjei",
    title: "Dansoman",
  },
];
