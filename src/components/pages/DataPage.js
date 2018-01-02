import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../../components/tables/DataTable";

const HomePage = () => (
  <div>
    <h1>Data Page</h1>
    <DataTable />
    <Link to="/">Go back to home page</Link>
  </div>
);

export default HomePage;
