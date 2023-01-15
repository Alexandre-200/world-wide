import Country from "./Country";

const Countries = () => {
  return (
    <div className="countries">
      <div className="countries__search">Barra de pesquisa</div>
      <div className="countries__list">
        <Country />
      </div>
      <div className="countries__pagination">lista de paises</div>
    </div>
  );
};

export default Countries;
