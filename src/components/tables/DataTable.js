import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const DataTable = ({ data, onLinkClicked }) => {
  const LinkCreator = (cell, row) => (
    <Link
      to="/edit"
      onClick={() => onLinkClicked(row.id)}
      style={{ textDecoration: "none" }}
    >
      {cell}
    </Link>
  );

  const ButtonCreator = (cell, row) => (
    <Link
      to="/edit"
      className="btn btn-primary btn-block"
      onClick={() => onLinkClicked(row.id)}
      style={{ textDecoration: "none", color: "#f8f9fa" }}
    >
      Edit
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

  return (
    <BootstrapTable data={data} striped hover version="4">
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
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  onLinkClicked: PropTypes.func.isRequired
};

export default DataTable;
