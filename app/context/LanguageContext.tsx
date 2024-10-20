import { createContext, Dispatch, SetStateAction } from "react";

// Define the type for the context value
interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>; // Type for the setLanguage function
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextType>({
  language: "indo", // Default language
  setLanguage: () => {}, // Empty function as default
});
