import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactGA from "react-ga4";
import App from "./App";
import "./index.css";

ReactGA.initialize("G-NYFX1HFY2R");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Home",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
