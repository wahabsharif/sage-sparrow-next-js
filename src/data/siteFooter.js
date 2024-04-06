import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText:
    "© 2024 Sage Sparrow Limited. Registered under Company Registration Number 04954156.Official Address: 4th Floor, Cannon Place, 78 Cannon Street, London, EC4N 6HL.Please note that calls may be recorded for training and monitoring purposes.Affiliated with the Association of Professional Compliance Consultants.",
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
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  address: "128 City Road, London, United Kingdom, EC1V 2NX",
  phone: "+0- ( 000 ) 000 - 0000",
  phoneHref: "12463330079",
  email: "needhelp@company.com",
  author: "Sage Sparrow",
  year: new Date().getFullYear(),
};

export default footerData;
