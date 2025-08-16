import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/personal_photo.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "ahmed.ben.aoun73@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Lisbon, Portgual",
      Link: "https://maps.app.goo.gl/AGdFSR5DgdoxJkbr6", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+351 931 393 064",
      Link: "tel:+351931393064",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Nova Information Management School",
      Link: "https://www.novaims.unl.pt/en",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Business Information Systems",
      Link: "https://isggb.rnu.tn/fr",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/ahmeedaoun",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/ahmed-ben-aoun/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/ahmed.aoun760/",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/ahmeed.aoun/",
    },
  ],
};
