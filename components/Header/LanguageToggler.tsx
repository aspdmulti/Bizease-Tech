import { useTheme } from "next-themes";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";

const LanguageToggler = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setLanguage(language === "indo" ? "eng" : "indo")}
    >
      <Image
        src="/images/icon/icon-ideng.png"
        alt="logo"
        width={21}
        height={21}
      />
    </button>
  );
};
export default LanguageToggler;
