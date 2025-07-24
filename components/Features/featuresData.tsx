import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <IoMdCloud />,
    bgColor: "bg-blue-600",
    title: "Bizease Website",
    description:
      "A professional website for your company branding and information.",
    suitability: (
      <span>
        <b>Best for:</b> All types of businesses
      </span>
    ),
  },
  {
    id: 2,
    icon: <GiShoppingCart />,
    bgColor: "bg-yellow-600",
    title: "Bizease POS",
    description:
      "Modern POS system for efficient and accurate sales transactions.",
    suitability: (
      <span>
        <b>Best for:</b> Restaurants, Retail, Distributors
      </span>
    ),
  },
  {
    id: 3,
    icon: <FaUsers />,
    bgColor: "bg-green-600",
    title: "Bizease ClientHub",
    description:
      "Centralized and accessible client and customer data management.",
    suitability: (
      <span>
        <b>Best for:</b> Consultants, Marketing agencies, Branding agencies
      </span>
    ),
  },
  {
    id: 4,
    icon: <IoMdConstruct />,
    bgColor: "bg-purple-600",
    title: "Bizease Project",
    description:
      "Structured and real-time monitoring and management of your business projects.",
    suitability: (
      <span>
        <b>Best for:</b> Event planners, Maintenance services, Developers
      </span>
    ),
  },
  {
    id: 5,
    icon: <FaUserShield />,
    bgColor: "bg-red-600",
    title: "Bizease HRD",
    description:
      "Integrated and secure HR management, attendance, and payroll.",
    suitability: (
      <span>
        <b>Best for:</b> All types of businesses
      </span>
    ),
  },
  {
    id: 6,
    icon: <GiMoneyStack />,
    bgColor: "bg-teal-600",
    title: "Bizease Finance",
    description:
      "Automated financial reports and real-time business cashflow monitoring.",
    suitability: (
      <span>
        <b>Best for:</b> All types of businesses
      </span>
    ),
  },
];

export default featuresData;
