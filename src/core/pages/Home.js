import Content from "../components/Content";
import Countries from "../components/countries/Countries";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <MobileSidebar/>
      <Content>
        <Topbar />
        <Countries />
      </Content>
    </div>
  );
};

export default Home;
