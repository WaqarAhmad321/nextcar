import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  src: string;
  alt: string;
  textFunction: () => string;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface CarImagesProps {
  src: () => string;
  alt: string;
}

export interface FilterProps {
  model: string;
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterOptionsProps {
  title: string;
  options: OptionsProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
