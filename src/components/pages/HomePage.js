import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/data">Go to data page</Link>
    <br />
    <Link to="/edit">Go to edit page</Link>
  </div>
);

export default HomePage;
