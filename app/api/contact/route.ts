import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
     
      company_name,
      help,
      company_size,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "boatengkwabenaakuamoah@gmail.com",
          pass: "pzqf qhrn mstr jgnj",
        },
      });

      const mailOptions = {
        from: email,
        to: "boatengkwabenaakuamoah@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Work Email: ${email}</p>
                
                    <p>Company Name: ${company_name}</p>
                    <p>Company Size: ${company_size}</p>
                    <p>Help: ${help}</p>
                
                    <p>Info: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}


// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   if (req.method === "POST") {
//     try {
//       const {
//         first_name,
//         last_name,
//         email,
//         address,
//         city,
//         country,
//         phone,
//         perfume_type,
//         inquiry,
//         terms,
//       } = await req.json();

//       const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: "your-email@gmail.com", // Update with your email
//           pass: "your-password", // Update with your password
//         },
//       });

//       const mailOptions = {
//         from: email,
//         to: "your-email@gmail.com", // Update with your email
//         subject: "Perfume Store Contact Form Submission",
//         html: `
//           <h1>Perfume Store Contact Form</h1>
//           <p>First Name: ${first_name}</p>
//           <p>Last Name: ${last_name}</p>
//           <p>Email: ${email}</p>
//           <p>Address: ${address}</p>
//           <p>City: ${city}</p>
//           <p>Country: ${country}</p>
//           <p>Phone: ${phone}</p>
//           <p>Perfume Type: ${perfume_type}</p>
//           <p>Inquiry: ${inquiry}</p>
//         `,
//       };

//       await transporter.sendMail(mailOptions);

//       return NextResponse.json("Email has been sent successfully.");
//     } catch (error) {
//       return NextResponse.json("Email has not been sent. Please try again later.");
//     }
//   } else {
//     return NextResponse.json("Method not allowed.");
//   }
// }
