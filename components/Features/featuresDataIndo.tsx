import { Feature } from "@/types/feature";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";

const featuresDataIndo: Feature[] = [
  {
    id: 1,
    icon: <GiShoppingCart />,
    title: "Transactions",
    description:
      "Tangani semua proses transaksi mulai dari input barang, pembuatan faktur, pelacakan transaksi, laporan penjualan, dan laporan inventaris.",
  },
  {
    id: 2,
    icon: <AiFillProduct />,
    title: "Products Management",
    description:
      "Atur bahan-bahan penyusun yang diperlukan untuk produk Anda dan lacak keluar masuknya.",
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
    icon: <IoMdConstruct />,
    title: "Operational Management",
    description:
      "Kelola berbagai tahap operasi bisnis Anda, seperti melacak status suatu proses atau barang, mencatat biaya operasional, dan lainnya.",
  },
  {
    id: 5,
    icon: <GiMoneyStack />,
    title: "Investment Records",
    description:
      "Catat biaya investasi yang telah anda keluarkan, dan kategorikan investasi tersebut.",
  },
  {
    id: 6,
    icon: <IoMdCloud />,
    title: "Online, Offline, or Hybrid",
    description:
      "Tentukan apakah perangkat lunak Anda akan beroperasi secara online, offline, hibrid, memberikan Anda fleksibilitas.",
  },
];

export default featuresDataIndo;
