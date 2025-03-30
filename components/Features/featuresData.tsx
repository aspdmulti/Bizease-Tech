import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <GiShoppingCart />,
    title: "Transaction / Invoicing",
    description:
      "Handle all transaction processes from item input, invoice creation, transaction tracker, sales report, and inventory report.",
  },
  {
    id: 2,
    icon: <AiFillProduct />,
    title: "Product, Project, & Client Management",
    description:
      "Manage all your product, project, and client information effortlessly.",
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
    icon: <GiMoneyStack />,
    title: "Expenses Record",
    description:
      "Record all expenses, from fixed costs and investments to marketing budgets and more, for better decision-making.",
  },
  {
    id: 5,
    icon: <FaUserShield />,
    title: "Role-based Access",
    description:
      "Atur akses pengguna sesuai dengan peran atau jabatan yang telah Anda tentukan.",
  },
  {
    id: 6,
    icon: <MdAccessTime />,
    title: "Anytime, Anywhere",
    description:
      "Monitor your business in real-time from any device, anytime, anywhere.",
  },
];

export default featuresData;
