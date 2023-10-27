import { calculateCarRent } from "@/libs/helpers";
import { CarProps } from "@/types";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    drive,
    make,
    model,
    transmission,
    year,
    class: carClass,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
          
        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/hero.png"
            alt="car"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
