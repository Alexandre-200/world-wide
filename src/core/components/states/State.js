import {
  CurrencyExchangeOutlined,
  LocationOn,
  LocalPhone,
  ArrowForward,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const State = ({ state }) => {
  const navigate = useNavigate();

  const handleVIewPage = () =>{
    navigate(`/state/${state.isoCode}`);
  }
  return (
    <div className="state">
      <div className="state__name">
        <div className="state__flag">
          <img
            alt={state.name}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${state.isoCode}.svg`}
          />
        </div>
        <h3>{state.name}</h3>
      </div>
      <div className="state__data">
        <div className="state__data--item">
          <LocalPhone />
          <span>isoCode: {state.isoCode}</span>
        </div>
        <div className="state__data--item">
          <CurrencyExchangeOutlined />
          <span>countryCode: {state.countryCode}</span>
        </div>
        <div className="state__data--item">
          <LocationOn />
          <span>latitude: {state.latitude}</span>
        </div>
        <div className="state__data--item">
          <LocationOn />
          <span>longitude: {state.longitude}</span>
        </div>
      </div>
      <div className="state__btn">
        <button onClick={handleVIewPage}>
          Ver mais <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default State;
