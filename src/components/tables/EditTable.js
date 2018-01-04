import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Validator from "validator";
import PropTypes from "prop-types";

const fakeData = [
  {
    id: 1,
    name: "Good Guy",
    condition: true,
    email: "goodguy@email.com",
    receivers: ["coolguy@email.com", "badguy@email.com"]
  }
];

const ReceiversCreator = cell => (
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

class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    };
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    const stateCopy = { ...this.state };
    stateCopy.data = stateCopy.data.slice();
    stateCopy.data[row.id - 1] = {
      ...stateCopy.data[row.id - 1]
    };
    if (cellValue === "true") {
      stateCopy.data[row.id - 1].condition = true;
      this.setState(stateCopy);
    } else if (cellValue === "false") {
      stateCopy.data[row.id - 1].condition = false;
      this.setState(stateCopy);
    }
  };

  onSubmit = () => {
    this.props.submit(this.state.data);
  };
  onReject = () => {
    this.props.reject(this.state.data);
  };

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

  render() {
    const cellEditProp = {
      mode: "click",
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell
    };

    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          striped
          hover
          version="4"
          cellEdit={cellEditProp}
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
            dataFormat={ReceiversCreator}
            dataAlign="center"
            tdStyle={{ verticalAlign: "middle" }}
          >
            Receivers
          </TableHeaderColumn>
        </BootstrapTable>
        <button
          onClick={this.onSubmit}
          style={{ margin: "15px 15px 15px 0px", width: "100px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <button
          onClick={this.onReject}
          style={{ width: "100px" }}
          type="button"
          className="btn btn-primary"
        >
          Reset
        </button>
      </div>
    );
  }
}

EditTable.propTypes = {
  submit: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired
};

export default EditTable;
