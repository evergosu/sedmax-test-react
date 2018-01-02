import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

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

const DataTable = () => (
  <BootstrapTable data={fakeData} striped hover condensed>
    <TableHeaderColumn dataField="id" width="50" isKey dataAlign="center">
      ID
    </TableHeaderColumn>
    <TableHeaderColumn dataField="name" dataAlign="center">
      Name
    </TableHeaderColumn>
    <TableHeaderColumn dataField="condition" dataAlign="center">
      Condition
    </TableHeaderColumn>
    <TableHeaderColumn dataField="email" dataAlign="center">
      Email
    </TableHeaderColumn>
    <TableHeaderColumn dataField="receivers" dataAlign="center">
      Receivers
    </TableHeaderColumn>
    <TableHeaderColumn dataAlign="center">Action</TableHeaderColumn>
  </BootstrapTable>
);

export default DataTable;
