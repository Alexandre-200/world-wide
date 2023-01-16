import { LanguageOutlined, TravelExploreOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const MobileSidebar = () => {
    return (
        <div className="mobileSidebar">
          <div className="mobileSidebar__logo">
            <Logo />
          </div>
    
          <div className="mobileSidebar__menu">
            <NavLink className="mobileSidebar__link" to="/">
              <LanguageOutlined/> Paises
            </NavLink>
            <NavLink className="mobileSidebar__link " to="/states">
              <TravelExploreOutlined/> Estados
            </NavLink>
          </div>
        </div>
      );
}

export default MobileSidebar;