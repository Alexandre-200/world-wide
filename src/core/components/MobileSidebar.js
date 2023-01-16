import { LanguageOutlined, TravelExploreOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const MobileSidebar = ({ showMenu, setShowMenu }) => {
  return (
    <div
      onClick={setShowMenu}
      className={
        showMenu ? "mobileSidebar__wrapper show" : "mobileSidebar_wrapper"
      }
    >
      <div className={showMenu ? "mobileSidebar show" : "mobileSidebar"}>
        <div className="mobileSidebar__logo">
          <Logo />
        </div>

        <div className="mobileSidebar__menu">
          <NavLink className="mobileSidebar__link" to="/">
            <LanguageOutlined /> Paises
          </NavLink>
          <NavLink className="mobileSidebar__link " to="/states">
            <TravelExploreOutlined /> Estados
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
