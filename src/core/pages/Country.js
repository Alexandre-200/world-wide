import { ArrowBack } from "@mui/icons-material";
import Topbar from "../components/Topbar";

const Country = () => {
  return (
    <div className="full-country">
      <Topbar />
      <div className="full-country__details">
        <div className="full-country__back">
          <ArrowBack />
        </div>
        <div className="full-country__flag">
          <img
            alt="United States"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/MZ.svg`}
          />
        </div>
        <h3 className="full-country__name">Mozambique</h3>
      </div>
    </div>
  );
};

export default Country;
