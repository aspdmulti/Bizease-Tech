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
      "Organize the ingredients needed for your products. In addition to reviewing the ingredient list as a standard procedure, you can also see the cost required for each product, making it easier to determine its selling price.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "HRD Management",
    description:
      "Manage your employees starting from salaries, positions, salary or position change periods, loans, insurance costs, and more. All this data will be recorded and easily accessible through the use of filters based on your needs.",
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
      "In addition to recording operational expenses, you can also document your investment costs, making it easier for you when opening a new branch or starting a similar business.",
  },
  {
    id: 6,
    icon: <IoMdCloud />,
    title: "Online, Offline, or Hybrid",
    description:
      "You can decide whether the software we design will operate online, offline, or in a hybrid mode, providing you with flexibility.",
  },
];

export default featuresData;
