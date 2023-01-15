import Content from "../components/Content";
import Countries from "../components/countries/Countries";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <Content>
        <Topbar />
        <Countries />
      </Content>
    </div>
  );
};

export default Home;
