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
