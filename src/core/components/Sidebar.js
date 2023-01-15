import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { LanguageOutlined, TravelExploreOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>

      <div className="sidebar__menu">
        <NavLink className="sidebar__link" to="/">
          <LanguageOutlined/> Paises
        </NavLink>
        <NavLink className="sidebar__link " to="/states">
          <TravelExploreOutlined/> Estados
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
