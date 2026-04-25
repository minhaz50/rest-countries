import { use, useMemo } from "react";

import CountryCard from "../CountryCard/CountryCard";

export default function Countries({
  countriesPromise,
  search,
  region,
  onSelectCountry,
}) {
  const data = use(countriesPromise);

  const filtered = useMemo(() => {
    const countries = Array.isArray(data) ? data : data?.data || [];
    return countries.filter((c) => {
      const matchSearch = c.name?.toLowerCase().includes(search.toLowerCase());
      const matchRegion = region === "All" || c.region === region;
      return matchSearch && matchRegion;
    });
  }, [data, search, region]);

  if (filtered.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔭</span>
        <h3>No countries found</h3>
        <p>Try adjusting your search or filter</p>
      </div>
    );
  }

  return (
    <div>
      <p className="results-count">
        Showing <strong>{filtered.length}</strong>{" "}
        {filtered.length === 1 ? "country" : "countries"}
      </p>
      <div className="countries-grid">
        {filtered.map((country, i) => (
          <CountryCard
            key={country.alpha3Code || country.name}
            country={country}
            index={i}
            onClick={() => onSelectCountry(country)}
          />
        ))}
      </div>
    </div>
  );
}
