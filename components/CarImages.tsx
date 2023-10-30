import { CarImagesProps } from "@/types";
import Image from "next/image";

const CarImages = ({ src, alt }: CarImagesProps) => {
  return (
    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg  ">
      <Image src={src()} alt={alt} priority fill className="object-contain" />
    </div>
  );
};

export default CarImages;
