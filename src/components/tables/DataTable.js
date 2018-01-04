import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import {
  LinkCreator,
  ButtonCreator,
  ReceiversCreator
} from "./CellStuffCreators";

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
