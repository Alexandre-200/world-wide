import { State as StatesList } from "country-state-city";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Searcher from "../Searcher";
import State from "./State";

const States = () => {
  const [states, setStates] = useState([]);
 
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    setStates(StatesList.getAllStates());
    //alert("states");
    
  }, []);

  const handleNextPage = () => {
    if (lastItem < states.length - 1) {
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
    setSearchTerm(e.target.value);
    console.log(searchTerm);
   states.map(state => console.log(state.name))
  };

  return (
    <div className="states">
      <div className="states__search">
        <Searcher
          searchTerm={searchTerm}
          setSearchTerm={handleSetSearchTerm}
          placeholder="Escreva (em ingles) o nome do estado"
        />
      </div>
      <div className="states__number">{` ${
        firstItem + 1
      } - ${lastItem}`}</div>
      <div className="states__list">
        {states
          .sort()
          .slice(firstItem, lastItem)
          .map((state) => {
            return <State key={state.name} state={state} />;
          })}
      </div>
      <div className="states__pagination">
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          countries={states}
          firstItem={firstItem}
          lastItem={lastItem}
        />
      </div>
    </div>
  );
};

export default States;
