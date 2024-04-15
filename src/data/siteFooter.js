import logo from "@/images/logo/sage-sparrow-logo.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText:
    "Sage Sparrow LLC. Official Address: 128 City Road, London, United Kingdom, EC1V 2NX. Please note that calls may be recorded for training and monitoring purposes.Affiliated with the Association of Professional Compliance Consultants.",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-pinterest-p",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      text: "Terms and Conditions",
      href: "/",
    },
    {
      id: 2,
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      id: 3,
      text: "Cookeis",
      href: "/cookies",
    },
  ],
  newsletterText: "Subsrcibe for our upcoming latest news.",
  addressUk: "128 City Road, London, EC1V 2NX, United Kingdom.",
  addressAe:
    "3805, Lake Terrace, Cluster D, Jumeirah Lakes Towers, Dubai, UAE.",
  phone: "+0- ( 000 ) 000 - 0000",
  phoneHref: "12463330079",
  emailUk: "info@sagesparrow.co.uk",
  emailAe: "info@sagesparrow.ae",
  author: "Sage Sparrow LLC.",
  year: new Date().getFullYear(),
};

export default footerData;
