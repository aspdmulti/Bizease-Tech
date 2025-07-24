import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";

const featuresDataIndo: Feature[] = [
  {
    id: 1,
    icon: <IoMdCloud />,
    bgColor: "bg-blue-600",
    title: "Bizease Website",
    description:
      "Website profesional untuk branding dan informasi perusahaan Anda.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Segala jenis bisnis
      </span>
    ),
  },
  {
    id: 2,
    icon: <GiShoppingCart />,
    bgColor: "bg-yellow-600",
    title: "Bizease POS",
    description:
      "Sistem kasir modern untuk transaksi penjualan yang efisien dan akurat.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Restoran, Retail, Distributor
      </span>
    ),
  },
  {
    id: 3,
    icon: <FaUsers />,
    bgColor: "bg-green-600",
    title: "Bizease ClientHub",
    description:
      "Manajemen data klien dan pelanggan secara terpusat dan mudah diakses.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Konsultan, Agensi marketing, Agensi branding
      </span>
    ),
  },
  {
    id: 4,
    icon: <IoMdConstruct />,
    bgColor: "bg-purple-600",
    title: "Bizease Project",
    description:
      "Monitoring dan pengelolaan project bisnis Anda secara terstruktur dan real-time.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Event Planner, Jasa maintenance, Developer
      </span>
    ),
  },
  {
    id: 5,
    icon: <FaUserShield />,
    bgColor: "bg-red-600",
    title: "Bizease HRD",
    description:
      "Pengelolaan SDM, absensi, dan payroll yang terintegrasi dan aman.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Segala jenis bisnis
      </span>
    ),
  },
  {
    id: 6,
    icon: <GiMoneyStack />,
    bgColor: "bg-teal-600",
    title: "Bizease Finance",
    description:
      "Laporan keuangan otomatis dan pemantauan cashflow bisnis kapan saja.",
    suitability: (
      <span>
        <b>Cocok untuk:</b> Segala jenis bisnis
      </span>
    ),
  },
];

export default featuresDataIndo;
