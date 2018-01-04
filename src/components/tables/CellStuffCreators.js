import React from "react";
import { Link } from "react-router-dom";

export const LinkCreator = cell => <Link to="/edit">{cell}</Link>;

export const ButtonCreator = () => (
  <Link to="/edit">
    <button type="button" className="btn btn-primary btn-block">
      Edit
    </button>
  </Link>
);

export const ReceiversCreator = cell => (
  <table
    className="align-middle text-center"
    style={{
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    {cell instanceof Array
      ? cell.map(item => <tr>{item}</tr>)
      : cell.split(",").map(item => <tr>{item}</tr>)}
  </table>
);
