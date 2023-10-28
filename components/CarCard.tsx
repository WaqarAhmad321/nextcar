import { CarCardProps } from "@/types";
import Image from "next/image";

const CarCard = ({ src, alt, textFunction }: CarCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={src} alt={alt} width={20} height={20} />

      <p className="text-[14px]">{textFunction()}</p>
    </div>
  );
};

export default CarCard;
