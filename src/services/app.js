const BASE_URL = "https://openapi.programming-hero.com/api";

export const fetchAllCountries = async () => {
  const res = await fetch(`${BASE_URL}/all`);
  if (!res.ok) throw new Error("Flied to Fetch Countries");
  const data = await res.json();
  return data.data || data;
};

export const countriesPromise = fetchAllCountries();
