"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

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
                  subtitle: `Development Pricing`,
                  description: `Get the best deal for your business solution. The prices below do not include server maintenance for online or hybrid operation.`,
                }}
              />
            ) : (
              <SectionHeader
                headerInfo={{
                  title: `HARGA`,
                  subtitle: `Harga Pengembangan`,
                  description: `Dapatkan penawaran terbaik untuk solusi bisnis Anda. Harga di bawah ini tidak termasuk biaya pemeliharaan server untuk operasi online atau hibrid.`,
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
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {language == "eng" ? (
              <>
                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Basic
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Start from{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 5.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Transaction Processes
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Products Management
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Sales Report
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Inventory Report
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-[#C64D27] px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                    popular
                  </div>

                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Premium
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Start from{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 8.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 font-semibold text-black last:mb-0 dark:text-manatee">
                        Basic Package
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Human Resources Management
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Salary Report
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Performance Report
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className=" animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Expert
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Start from{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 10.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 font-semibold text-black last:mb-0 dark:text-manatee">
                        Premium Package
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Operational Management
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Investment Management
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Finance Report
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Basic
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Mulai dari{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 5.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Proses Transaksi
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Manajemen Produk
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Laporan Penjualan
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Laporan Inventaris
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-[#C64D27] px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                    populer
                  </div>

                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Premium
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Mulai dari{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 8.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 font-semibold text-black last:mb-0 dark:text-manatee">
                        Paket Basic
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Manajemen Sumber Daya Manusia
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Laporan Gaji
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Laporan Kinerja
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Item Harga --> */}
                <div className="animate_top group relative w-3/4 rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Expert
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Mulai dari{" "}
                  </h4>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Rp 10.000.000{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      ,-
                    </span>
                  </h4>
                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 font-semibold text-black last:mb-0 dark:text-manatee">
                        Paket Premium
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Manajemen Operasional
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Manajemen Investasi
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Laporan Keuangan
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mx-auto mt-5 flex w-full justify-center">
            <a
              href="https://wa.me/6285711899575"
              target="_blank"
              className="flex items-center rounded-md bg-primary px-4 py-2 text-center text-white transition duration-300 hover:bg-opacity-90"
            >
              <FaWhatsapp className="mr-2" />
              {language == "eng" ? "Contact Us" : "Hubungi Kami"}
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
