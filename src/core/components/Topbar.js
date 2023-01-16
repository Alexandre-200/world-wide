import {
  GitHub,
  YouTube,
  FacebookRounded,
  Instagram,
  Menu
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__hamburguer">
        <Menu/>
      </div>
      <ul className="topbar__menu">
        <li className="topbar__item">
          <a href="www.google.com" target="_blank" className="topbar__link">
            <GitHub />
          </a>
        </li>
        <li className="topbar__item">
          <a href="www.google.com" target="_blank" className="topbar__link">
            <YouTube />
          </a>
        </li>
        <li className="topbar__item">
          <a href="www.google.com" target="_blank" className="topbar__link">
            <FacebookRounded />
          </a>
        </li>
        <li className="topbar__item">
          <a href="www.google.com" target="_blank" className="topbar__link">
            <Instagram />
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Topbar;
