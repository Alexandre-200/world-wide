import {
  CurrencyExchangeOutlined,
  LocationOn,
  LocalPhone,
  ArrowForward,
} from "@mui/icons-material";

const Country = () => {
  return (
    <div className="country">
      <div className="country__name">
        <div className="country__flag">
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          />
        </div>
        <h3>Mozambique</h3>
      </div>
      <div className="country__data">
        <div className="country__data--item">
          <LocalPhone />
          <span>cod. telefonico: 258</span>
        </div>
        <div className="country__data--item">
          <CurrencyExchangeOutlined />
          <span>moeda: Mzn</span>
        </div>
        <div className="country__data--item">
          <LocationOn />
          <span>latitude: M415zn</span>
        </div>
        <div className="country__data--item">
          <LocationOn />
          <span>longetude: 154546</span>
        </div>
      </div>
      <div className="country__btn">
        <button>
          Ver mais <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Country;
