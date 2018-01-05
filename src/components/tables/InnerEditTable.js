import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Validator from "validator";

class InnerEditTable extends React.Component {
  nameValidator = value => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };
    if (!Validator.isLength(value, { min: 7, max: 20 })) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg =
        "Please insert your 'Firstname Lastname', if you are not Korean it must be more than 7 chars (up to 20)";
      response.notification.title = "Requested name";
    } else if (!Validator.matches(value, ["^[a-zA-Z ]*$"])) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Looks like you are Korean, are you?";
      response.notification.title = "Invalid name";
    }
    return response;
  };

  userEmailValidator = value => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };
    if (!Validator.isEmail(value)) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Only correct Email must be inserted";
      response.notification.title = "Incorrect email";
    }
    return response;
  };

  receiversEmailValidator = emails => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };

    emails.split(",").forEach(email => {
      if (!Validator.isEmail(email)) {
        response.isValid = false;
        response.notification.type = "error";
        response.notification.msg =
          "Only correct Emails separated with commas (no blank spaces) must be inserted";
        response.notification.title = "Incorrect email or input format";
      }
    });
    return response;
  };

  ReceiversCreator = cell => (
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

  render() {
    const cellEditProp = {
      mode: "click",
      blurToSave: true
    };

    return (
      <BootstrapTable
        data={this.props.data}
        remote
        striped
        hover
        version="4"
        cellEdit={cellEditProp}
        options={{ onCellEdit: this.props.onCellEdit }}
      >
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
          editable={{ type: "input", validator: this.nameValidator }}
          dataAlign="center"
          tdStyle={{ verticalAlign: "middle" }}
        >
          Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="condition"
          editable={{
            type: "select",
            options: { values: ["true", "false"] }
          }}
          dataAlign="center"
          tdStyle={{ verticalAlign: "middle" }}
        >
          Condition
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="email"
          dataAlign="center"
          editable={{ type: "input", validator: this.userEmailValidator }}
          tdStyle={{ verticalAlign: "middle" }}
        >
          Email
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="receivers"
          editable={{
            type: "input",
            validator: this.receiversEmailValidator
          }}
          dataFormat={this.ReceiversCreator}
          dataAlign="center"
          tdStyle={{ verticalAlign: "middle" }}
        >
          Receivers
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

InnerEditTable.propTypes = {
  onCellEdit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default InnerEditTable;
