
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
  );

export const metadata: Metadata = {
  title: "Pearl Essence - Exquisite Perfume Shop in Ghana",
  description: "Discover luxury fragrances at Pearl Essence, the premier perfume boutique in Ghana. Explore our curated collection of scents from around the world. Visit us today!",
  icons: {
    icon: '/logo/perfume-bottle.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body 
      
      suppressHydrationWarning={true}
      className={font.className}>
        <Analytics />
        {children}
        
        </body>
    </html>
  );
}
