import React from "react";
import PropTypes from "prop-types";
import InnerEditTable from "./InnerEditTable";

class EditTable extends React.Component {
  getDataToShow = () => {
    const { data, checked } = this.props;
    const dataToShow = [];
    data.forEach(
      item =>
        checked.includes(item.id.toString()) ? dataToShow.push(item) : null
    );
    return dataToShow;
  };

  handleCellEdit = (row, fieldName, value) => {
    const data = this.getDataToShow();
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
    // const stateCopy = { ...this.state };
    // stateCopy.data = stateCopy.data.slice();
    // stateCopy.data[row.id - 1] = {
    //   ...stateCopy.data[row.id - 1]
    // };
    // if (value === "true") {
    //   stateCopy.data[row.id - 1].condition = true;
    //   this.setState(stateCopy);
    // } else if (value === "false") {
    //   stateCopy.data[row.id - 1].condition = false;
    //   this.setState(stateCopy);
    // }
  };

  render() {
    const DataToShow = this.getDataToShow();
    const { onSubmit, onReject } = this.props;
    return (
      <div>
        <InnerEditTable onCellEdit={this.handleCellEdit} data={DataToShow} />
        <button
          onClick={() => onSubmit()}
          style={{ margin: "15px 15px 15px 0px", width: "100px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <button
          onClick={() => onReject()}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  checked: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};

export default EditTable;
