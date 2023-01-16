import { Country as CountryList } from "country-state-city";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Searcher from "../Searcher";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState([]);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCountries(CountryList.getAllCountries());
  }, []);

  const handleNextPage = () => {
    if (lastItem < countries.length - 1) {
      setFirstItem(firstItem + 6);
      setLastItem(lastItem + 6);
    }
  };

  const handlePreviousPage = () => {
    if (firstItem > 0) {
      setFirstItem(firstItem - 6);
      setLastItem(lastItem - 6);
    }
  };

  const handleSetSearchTerm = (e) => {
    if(e.target.value !== ""){
      setSearchTerm(e.target.value);
      setCountriesSearch([]);
      const t =
        countries
          .filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort()
    
      console.log(t);
    }
   
  };

  return (
    <div className="countries">
      <div className="countries__search">
        <Searcher
          searchTerm={searchTerm}
          setSearchTerm={handleSetSearchTerm}
          placeholder="Escreva (em ingles) o nome do pais"
        />
      </div>
      <div className="countries__number">{` ${
        firstItem + 1
      } - ${lastItem}`}</div>
      <div className="countries__list">
        {searchTerm
          ? countriesSearch
              .sort()
              .slice(firstItem, lastItem)
              .map((country) => {
                return <Country key={country.name} country={country} />;
              })
          : countries
              .sort()
              .slice(firstItem, lastItem)
              .map((country) => {
                return <Country key={country.name} country={country} />;
              })}
      </div>
      <div className="countries__pagination">
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          countries={countries}
          firstItem={firstItem}
          lastItem={lastItem}
        />
      </div>
    </div>
  );
};

export default Countries;
