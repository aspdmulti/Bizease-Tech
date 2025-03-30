import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";

const featuresDataIndo: Feature[] = [
  {
    id: 1,
    icon: <GiShoppingCart />,
    title: "Transaction / Invoicing",
    description:
      "Tangani semua proses transaksi mulai dari input barang, pembuatan faktur, pelacakan transaksi, laporan penjualan, dan laporan inventaris.",
  },
  {
    id: 2,
    icon: <AiFillProduct />,
    title: "Product, Project, & Client Management",
    description:
      "Kelola semua informasi produk, project, dan klien Anda dengan mudah.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "HRD Management",
    description:
      "Kelola karyawan Anda mulai dari gaji, posisi, ketentuan bonus, pinjaman, biaya asuransi, dan lainnya.",
  },
  {
    id: 4,
    icon: <GiMoneyStack />,
    title: "Expenses Record",
    description:
      "Catat segala bentuk pengeluaran mulai dari biaya tetap, investasi, budget marketing, dan lainnya untuk pengambilan keputusan yang lebih baik.",
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
      "Pantau bisnis Anda secara real-time dari perangkat apa pun, kapan saja, dan di mana saja.",
  },
];

export default featuresDataIndo;
