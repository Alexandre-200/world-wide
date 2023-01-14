import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
    
      <Content>
        <Topbar />
      </Content>
    </div>
  );
};

export default Home;
