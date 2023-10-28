"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/libs/helpers";
import { CarCard, CarDetails, CustomButton } from "@/components";

interface CarCardsProps {
  car: CarProps;
}

const CarCards = ({ car }: CarCardsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, drive, make, model, transmission, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

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

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <CarCard
            src="/steering-wheel.svg"
            alt="steering wheel"
            textFunction={() => (transmission === "a" ? "Automatic" : "Manual")}
          />
          <CarCard
            src="/tire.svg"
            alt="tire"
            textFunction={() => drive.toUpperCase()}
          />
          <CarCard
            src="/gas.svg"
            alt="gas"
            textFunction={() => `${city_mpg} MPG`}
          />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View Car"
            containerStyles="w-full p-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCards;
