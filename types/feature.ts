import { ReactElement, ReactNode } from "react";

export type Feature = {
  id: number;
  icon: ReactElement;
  bgColor: string;
  title: string;
  description: string;
  suitability: ReactNode;
};
