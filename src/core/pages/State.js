import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Content from "../components/Content";
import States from "../components/states/States";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const State = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>WorldWide | Todos os estados do mundo</title>
      </Helmet>
      <div className="home">
        <Sidebar />
        <MobileSidebar
          showMenu={showMenu}
          setShowMenu={() => setShowMenu(false)}
        />
        <Content>
          <Topbar setShowMenu={() => setShowMenu(true)} />
          <States />
        </Content>
      </div>
    </HelmetProvider>
  );
};

export default State;
