import "./App.css";
import { Suspense, useState } from "react";
import { countriesPromise } from "./services/api";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import SkeletonGird from "./components/SkeletonCard/SkeletonGird";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<SkeletonGird />}>
          <Countries
            countriesPromise={countriesPromise}
            search={search}
            region={region}
            onSelectCountry={setSelectedCountry}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
