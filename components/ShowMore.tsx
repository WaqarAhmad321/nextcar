"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";
import { updateSearchParams } from "@/libs";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          handleClick={handleNavigation}
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
        />
      )}
    </div>
  );
};

export default ShowMore;
