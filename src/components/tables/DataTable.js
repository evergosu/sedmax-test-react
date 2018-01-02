import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";

const fakeData = [
  {
    id: 1,
    name: "Good Guy",
    condition: true,
    email: "goodguy@email.com",
    receivers: ["coolguy@email.com", "badguy@email.com"]
  },
  {
    id: 2,
    name: "Cool Guy",
    condition: true,
    email: "coolguy@email.com",
    receivers: ["goodguy@email.com", "badguy@email.com"]
  },
  {
    id: 3,
    name: "Bad Guy",
    condition: true,
    email: "badguy@email.com",
    receivers: ["goodguy@email.com", "coolguy@email.com"]
  }
];

const LinkCreator = cell => <Link to="/edit">{cell}</Link>;

const ButtonCreator = () => (
  <Link to="/edit">
    <button type="button" className="btn btn-primary btn-block">
      Edit
    </button>
  </Link>
);

const ReceiversCreator = cell => (
  <table
    className="align-middle text-center"
    style={{
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    {cell.map(item => <tr>{item}</tr>)}
  </table>
);

const DataTable = () => (
  <BootstrapTable data={fakeData} striped hover version="4">
    <TableHeaderColumn
      isKey
      dataField="id"
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
      width="50"
    >
      ID
    </TableHeaderColumn>
    <TableHeaderColumn
      dataField="name"
      dataFormat={LinkCreator}
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
    >
      Name
    </TableHeaderColumn>
    <TableHeaderColumn
      dataField="condition"
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
    >
      Condition
    </TableHeaderColumn>
    <TableHeaderColumn
      dataField="email"
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
    >
      Email
    </TableHeaderColumn>
    <TableHeaderColumn
      dataField="receivers"
      dataFormat={ReceiversCreator}
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
    >
      Receivers
    </TableHeaderColumn>
    <TableHeaderColumn
      dataFormat={ButtonCreator}
      dataAlign="center"
      tdStyle={{ verticalAlign: "middle" }}
    >
      Action
    </TableHeaderColumn>
  </BootstrapTable>
);

export default DataTable;
