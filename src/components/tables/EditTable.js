import React from "react";
import PropTypes from "prop-types";
import InnerEditTable from "./InnerEditTable";

const fakeData = [
  {
    id: 1,
    name: "Good Guy",
    condition: true,
    email: "goodguy@email.com",
    receivers: ["coolguy@email.com", "badguy@email.com"]
  }
];

class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.dataFromStore = fakeData;
    this.state = {
      data: this.dataFromStore
    };
  }

  onCellEdit = (row, fieldName, value) => {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((item, i) => {
      if (item.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }

    // TODO: bicycle need to be fixed
    const stateCopy = { ...this.state };
    stateCopy.data = stateCopy.data.slice();
    stateCopy.data[row.id - 1] = {
      ...stateCopy.data[row.id - 1]
    };
    if (value === "true") {
      stateCopy.data[row.id - 1].condition = true;
      this.setState(stateCopy);
    } else if (value === "false") {
      stateCopy.data[row.id - 1].condition = false;
      this.setState(stateCopy);
    }
    this.props.provide(this.state.data);
  };

  onSubmit = () => {
    this.props.submit(this.state.data);
  };

  onReject = () => {
    this.props.reject(this.state.data);
  };

  render() {
    return (
      <div>
        <InnerEditTable onCellEdit={this.onCellEdit} {...this.state} />
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
  reject: PropTypes.func.isRequired,
  provide: PropTypes.func.isRequired
};

export default EditTable;
