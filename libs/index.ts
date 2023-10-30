import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4f928dfafbmsh22793583bffd05ap10ebdbjsn95b769b6ca04",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    headers
  );
  const data = response.json();

  return data;
}

export function generateImageUrl(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getImage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}
