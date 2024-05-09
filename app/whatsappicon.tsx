import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

interface WhatsAppIconProps {
  link: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 p-4 rounded-full shadow-lg fixed bottom-5 right-5 z-50"
    >
      <AiOutlineWhatsApp className="text-white text-4xl" />
    </a>
  );
};

export default WhatsAppIcon;


// import React from 'react';
// import { AiOutlineWhatsApp } from 'react-icons/ai';

// const WhatsAppIcon = ({ link }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-green-500 p-4 rounded-full shadow-lg fixed bottom-5 right-5 z-50"
//       // style={{ fontSize: '10rem' }} // Increase icon size
//     >
//       <AiOutlineWhatsApp className="text-white text-4xl" />
//     </a>
//   );
// };

// export default WhatsAppIcon;


