import Country from "./Country";

const Countries = () => {
  const countries = Array.from(Array(6).keys());
  return (
    <div className="countries">
      <div className="countries__search">Barra de pesquisa</div>
      <div className="countries__list">
        {countries.map((country, i) => {
          return <Country key={i} />;
        })}
      </div>
      <div className="countries__pagination">lista de paises</div>
    </div>
  );
};

export default Countries;
