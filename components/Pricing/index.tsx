"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { IoMdConstruct, IoMdCloud } from "react-icons/io";

const Pricing = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section
        id="pricing"
        className="overflow-hidden pb-20 pt-20 lg:pt-25 xl:pt-30"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            {language == "eng" ? (
              <SectionHeader
                headerInfo={{
                  title: `PRICING`,
                  subtitle: `Subscription Pricing`,
                  description: `Get the best deal for your business solution.`,
                }}
              />
            ) : (
              <SectionHeader
                headerInfo={{
                  title: `HARGA`,
                  subtitle: `Harga Berlangganan`,
                  description: `Dapatkan penawaran terbaik untuk solusi bisnis Anda.`,
                }}
              />
            )}
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          {/* Changed from flex to grid */}
          <div className="grid grid-cols-1 justify-center gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {language == "eng" ? (
              <>
                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Website
                    <IoMdCloud className="ml-2 text-blue-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 100,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Professional website
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Responsive design
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Company information
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Product and service catalog
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease POS
                    <GiShoppingCart className="ml-2 text-yellow-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 300,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Cashier application
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Product management (price, stock, category)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Sales report
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Inventory report
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease ClientHub
                    <FaUsers className="ml-2 text-green-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 350,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Automated transaction and invoicing process
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Client management (data, contact, fee)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Lead and client report
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Revenue report
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Project
                    <IoMdConstruct className="ml-2 text-purple-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 350,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Automated transaction and invoicing process
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Project management (data, timeline, fee, installment)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Lead and project report
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Revenue report
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease HRD
                    <FaUserShield className="ml-2 text-red-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 250,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Employee management (data, contact, salary)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Attendance and overtime management
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Cash advance and leave requests
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Salary and attendance report
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Finance
                    <GiMoneyStack className="ml-2 text-teal-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Start from IDR 250,000/Month
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Expense recording by category
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Expense report
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Website
                    <IoMdCloud className="ml-2 text-blue-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 100.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Website profesional
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Tampilan responsif
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Informasi perusahaan
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Katalog produk dan layanan
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease POS
                    <GiShoppingCart className="ml-2 text-yellow-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 300.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Aplikasi kasir
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Manajemen produk (harga, stok, kategori)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan Penjualan
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan Inventaris
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  {/* <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-[#C64D27] px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                    terlaris
                  </div> */}
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease ClientHub
                    <FaUsers className="ml-2 text-green-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 350.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Proses transaksi dan invoicing otomatis
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Manajemen klien (data, kontak, fee)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan lead dan klien
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan omzet
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Project
                    <IoMdConstruct className="ml-2 text-purple-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 350.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Proses transaksi dan invoicing otomatis
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Manajemen projek (data, timeline, fee, cicilan)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan lead dan projek
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan omzet
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease HRD
                    <FaUserShield className="ml-2 text-red-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 250.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Manajemen karyawan (data, kontak, gaji)
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Absensi dan lembur karyawan
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Kasbon dan pengajuan cuti
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan gaji dan absensi
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative mx-auto flex w-full flex-col rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none xl:p-6">
                  <h3 className="mb-4 flex items-center justify-between text-3xl font-bold text-black dark:text-white xl:text-3xl">
                    Bizease Finance
                    <GiMoneyStack className="ml-2 text-teal-600" />
                  </h3>
                  <h4 className="mb-2 text-para2 font-medium text-black dark:text-white">
                    Mulai dari IDR 250.000/Bulan{" "}
                  </h4>
                  <div className="mt-5 border-t border-stroke pb-6 pt-5 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Pencatatan pengeluaran berdasarkan kategori
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        • Laporan pengeluaran
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto mt-auto flex w-full justify-center">
                    <a
                      href="https://wa.me/6285711899575"
                      target="_blank"
                      className="flex items-center rounded-md bg-primary px-2 py-1 text-center text-white transition duration-300 hover:bg-opacity-90"
                    >
                      <FaWhatsapp className="mr-2" />
                      {language == "eng" ? "Contact Us" : "Hubungi Kami"}
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
