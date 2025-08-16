import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "ahmed.ben.aoun73@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/ahmeedaoun/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+351 931 393 064",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+216 23 447 834",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/ahmeedaoun",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmed-ben-aoun/",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "facebook.com/ahmed.aoun760/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "instagram.com/ahmeed.aoun/",
  },
];
