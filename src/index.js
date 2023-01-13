import reactDom from "react-dom/client";
import App from "./App";
import './styles/global.scss';

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App/>)
