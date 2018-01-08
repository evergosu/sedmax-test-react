import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { devToolsEnhancer } from "redux-devtools-extension";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "../node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import reducer from "./reducers";

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
