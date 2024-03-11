// import logo from "@/images/resources/logo-1.png";

const sectors = {
  id: 1,
  name: "Sectors",
  href: "/sectors",
  subNavItems: [
    {
      id: 1,
      name: "Capital Markets",
      href: "/capital-markets",
      subItems: [
        {
          id: 1,
          name: "Asset Management",
          href: "/asset-management",
        },
        { id: 2, name: "Broker Dealers", href: "/broker-dealers" },
      ],
    },
    {
      id: 2,
      name: "Consumer Credit",
      href: "/consumer-credit",
      subItems: [
        { id: 1, name: "Credit Brokers", href: "/credit-brokers" },
        { id: 2, name: "Leasing", href: "/leasing" },
        { id: 3, name: "Lending", href: "/lending" },
      ],
    },
    {
      id: 3,
      name: "Insurance, Mortgages & Claims",
      href: "/insurance-mortgages-and-claims",
      subItems: [
        {
          id: 1,
          name: "Insurance",
          href: "/insurance",
        },
        { id: 2, name: "Mortgages", href: "/mortgages" },
        { id: 3, name: "Claims Management", href: "/claims-management" },
        {
          id: 4,
          name: "Funeral Plan Providers",
          href: "/funeral-plan-providers",
        },
      ],
    },
    {
      id: 4,
      name: "Payment Services & Cryptoassets",
      href: "/payment-services-and-cryptoassets",
      subItems: [
        { id: 1, name: "Payment Services", href: "/payment-services" },
        { id: 2, name: "Cryptoassets", href: "/cryptoassets" },
        { id: 3, name: "FinTech", href: "/fintech" },
        { id: 4, name: "E-money", href: "/e-money" },
        { id: 5, name: "Open Banking", href: "/open-banking" },
      ],
    },
    {
      id: 5,
      name: "Wealth Management",
      href: "/wealth-management",
      subItems: [
        {
          id: 1,
          name: "Portfolio Management",
          href: "/portfolio-management",
        },
        { id: 2, name: "Advice Services", href: "/advice-services" },
      ],
    },
    {
      id: 6,
      name: "Wholesale Investment Firms",
      href: "/wholesale-investment-firms",
      subItems: [
        { id: 1, name: "Hedge Funds", href: "/hedge-funds" },
        { id: 2, name: "Corporate Finance", href: "/corporate-finance" },
        { id: 3, name: "Brokers", href: "/brokers" },
        { id: 4, name: "Private Markets", href: "/private-markets" },
      ],
    },
  ],
};
const services = {
  id: 2,
  name: "Services",
  href: "/services",
  subNavItems: [
    {
      id: 1,
      name: "FCA Authorisation & Applications",
      href: "/fca-authorisation-and-pplications",
      subItems: [
        {
          id: 1,
          name: "FCA Authorisation",
          href: "/fca-authorisation",
        },
        { id: 2, name: "Brexit and TPR", href: "/brexit-and-tpr" },
        {
          id: 3,
          name: "FCA Sandbox",
          href: "/fca-sandbox",
        },
        {
          id: 4,
          name: "Variation of Permission",
          href: "/variation-of-permission",
        },
        {
          id: 5,
          name: "Change in Control",
          href: "/change-in-control",
        },
        {
          id: 6,
          name: "Appointed Representatives",
          href: "/appointed-representatives",
        },
        {
          id: 7,
          name: "5MLD Registration",
          href: "/5mld-registration",
        },
        {
          id: 8,
          name: "Agents and Distributors",
          href: "/agents-and-distributors",
        },
      ],
    },
    {
      id: 2,
      name: "SEC Compliance & Registration",
      href: "/sec-compliance-and-registration",
      subItems: [
        { id: 1, name: "SEC Registration", href: "/sec-registration" },
        { id: 2, name: "Ongoing SEC Support", href: "/ongoing-sec-support" },
      ],
    },
    {
      id: 3,
      name: "Compliance Advisory",
      href: "/compliance-advisory",
      subItems: [
        {
          id: 1,
          name: "Consumer Duty",
          href: "/consumer-duty",
        },
        { id: 2, name: "SMCR", href: "/smcr" },
        {
          id: 3,
          name: "Compliance Healthcheck",
          href: "/compliance-healthcheck",
        },
        {
          id: 4,
          name: "Due Diligence",
          href: "/due-diligence",
        },
        {
          id: 5,
          name: "Ongoing Compliance Support",
          href: "/ongoing-compliance-support",
        },
        { id: 6, name: "Secondments", href: "/secondments" },
        {
          id: 7,
          name: "Safeguarding Audits",
          href: "/safeguarding-audits",
        },
        {
          id: 8,
          name: "Financial Promotions",
          href: "/financial-promotions",
        },
        {
          id: 9,
          name: "Notifications",
          href: "/notifications",
        },
        {
          id: 10,
          name: "AR Monitoring",
          href: "/ar-monitoring",
        },
      ],
    },
    {
      id: 4,
      name: "Prudential Services & Regulatory Reporting",
      href: "/prudential-services-and-regulatory-reporting",
      subItems: [
        { id: 1, name: "Regulatory Reporting", href: "/regulatory-reporting" },
        {
          id: 2,
          name: "Capital and Liquidity Adequacy",
          href: "/capital-and-liquidity-adequacy",
        },
        { id: 3, name: "Wind-down planning", href: "/wind-down-planning" },
        { id: 4, name: "ICARA", href: "/icara" },
        { id: 5, name: "IFPR", href: "/ifpr" },
      ],
    },
    {
      id: 5,
      name: "Training",
      href: "/training",
      subItems: [
        {
          id: 1,
          name: "Classroom Training",
          href: "/classroom-training",
        },
        { id: 2, name: "Online Training", href: "/online-training" },
      ],
    },
    {
      id: 6,
      name: "Financial Crime",
      href: "/financial-crime",
    },
    {
      id: 7,
      name: "Compliance Software",
      href: "/compliance-software",
      subItems: [
        {
          id: 1,
          name: "PortAll",
          href: "/port-all",
        },
      ],
    },
  ],
};
const resources = {
  id: 3,
  name: "resources",
  href: "/resources",
  subNavItems: [
    {
      id: 1,
      name: "Articles",
      href: "/articles",
    },
    {
      id: 2,
      name: "Events",
      href: "/events",
    },
    {
      id: 3,
      name: "Factsheets",
      href: "/factsheets",
    },
    {
      id: 4,
      name: "Talking regulation",
      href: "/talking-regulation",
    },
    {
      id: 5,
      name: "Subscribe",
      href: "/subscribe",
    },
  ],
};
const aboutUs = {
  id: 4,
  name: "about Us",
  href: "/about-us",
  subNavItems: [
    {
      id: 1,
      name: "Meet our team",
      href: "/meet-our-team",
    },
    {
      id: 2,
      name: "Our values",
      href: "/our-values",
    },
    {
      id: 3,
      name: "CSR",
      href: "/csr",
    },
    {
      id: 5,
      name: "Work here",
      href: "/work-here",
      subItems: [
        {
          id: 1,
          name: "Current opportunities",
          href: "/current-opportunities",
        },
        {
          id: 2,
          name: "Experienced professionals",
          href: "/experienced-professionals",
        },
        {
          id: 3,
          name: "Contractors",
          href: "/contractors",
        },
        {
          id: 4,
          name: "Learning and Development",
          href: "/learning-and-development",
        },
      ],
    },
    {
      id: 6,
      name: "Company News",
      href: "/company-news",
    },
  ],
};
export const navItems = [
  sectors,
  services,
  resources,
  aboutUs,
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    id: 1,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-facebook-square",
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
];

const headerData = {
  // logo,
  navItems,
  callText: "Need help? Talk to an expert",
  phone: "+1- ( 246 ) 333 - 0079",
  phoneHref: "12463330079",
  email: "needhelp@oslim.com",
  socials,
};

export default headerData;
