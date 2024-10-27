import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <GiShoppingCart />,
    title: "Transactions",
    description:
      "Handle all transaction processes from item input, invoice creation, transaction tracker, sales report, and inventory report.",
  },
  {
    id: 2,
    icon: <AiFillProduct />,
    title: "Products Management",
    description:
      "Manage the necessary ingredients for your product and track their inventory in and out.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "HRD Management",
    description:
      "Manage your employees starting from salaries, positions, bonus criteria, loans, insurance costs, and more.",
  },
  {
    id: 4,
    icon: <IoMdConstruct />,
    title: "Operational Management",
    description:
      "Manage various stages of your business operations, including tracking the status of a process or item, recording operational costs, and more.",
  },
  {
    id: 5,
    icon: <GiMoneyStack />,
    title: "Investment Records",
    description:
      "Record the investment costs you have incurred and categorize those investments.",
  },
  {
    id: 6,
    icon: <IoMdCloud />,
    title: "Online, Offline, or Hybrid",
    description:
      "Decide whether the your software will operate online, offline, or hybrid, providing you with flexibility.",
  },
];

export default featuresData;
