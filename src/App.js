import React from "react";
import { Route } from "react-router-dom";
import DataPage from "./components/pages/DataPage";
import EditPage from "./components/pages/EditPage";

const App = () => (
  <div className="container">
    <Route path="/" exact component={DataPage} />
    <Route path="/edit" exact component={EditPage} />
  </div>
);

export default App;
