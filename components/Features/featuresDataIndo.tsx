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
      "Atur bahan-bahan yang diperlukan untuk produk Anda. Selain meninjau daftar bahan sebagai prosedur standar, Anda juga dapat melihat biaya yang diperlukan untuk setiap produk, sehingga lebih mudah untuk menentukan harga jualnya.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "HRD Management",
    description:
      "Kelola karyawan Anda mulai dari gaji, posisi, periode perubahan gaji atau posisi, pinjaman, biaya asuransi, dan lainnya. Semua data ini akan dicatat dan mudah diakses melalui penggunaan filter berdasarkan kebutuhan Anda.",
  },
  {
    id: 4,
    icon: <IoMdConstruct />,
    title: "Operational Management",
    description:
      "Kelola berbagai tahap operasi bisnis Anda, termasuk melacak status suatu proses atau barang, mencatat biaya operasional, dan lainnya.",
  },
  {
    id: 5,
    icon: <GiMoneyStack />,
    title: "Investment Records",
    description:
      "Selain mencatat biaya operasional, Anda juga dapat mendokumentasikan biaya investasi Anda, sehingga lebih mudah bagi Anda saat membuka cabang baru atau memulai bisnis serupa.",
  },
  {
    id: 6,
    icon: <IoMdCloud />,
    title: "Online, Offline, or Hybrid",
    description:
      "Anda dapat memutuskan apakah perangkat lunak yang kami rancang akan beroperasi secara online, offline, atau dalam mode hibrid, memberikan Anda fleksibilitas.",
  },
];

export default featuresDataIndo;
