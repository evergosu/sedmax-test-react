import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { devToolsEnhancer } from "redux-devtools-extension";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "../node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import reducer from "./reducers";

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
