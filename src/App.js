import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import DataPage from "./components/pages/DataPage";
import EditPage from "./components/pages/EditPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/data" exact component={DataPage} />
    <Route path="/edit" exact component={EditPage} />
  </div>
);

export default App;
