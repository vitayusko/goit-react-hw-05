import ReactDOM from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
