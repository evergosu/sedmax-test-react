import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import InnerEditTable from "./InnerEditTable";

class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cache: [],
      changed: []
    };
  }

  componentWillMount = () => {
    const cacheFromStore = this.props.data.map(value => ({ ...value }));
    this.setState({ cache: cacheFromStore });
  };

  getDataToShow = () => {
    const { checked } = this.props;
    const { cache } = this.state;
    const dataToShow = [];
    cache.forEach(
      item => checked.includes(item.id.toString()) && dataToShow.push(item)
    );
    return dataToShow;
  };

  handleCellEdit = (row, fieldName, value) => {
    const { cache } = this.state;
    let rowIdx;
    const targetRow = cache.find((item, i) => {
      if (item.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      // This two checks below and transformations are needed
      // because of table component API supports only strings
      if (value === "true") {
        targetRow[fieldName] = true;
      } else if (value === "false") {
        targetRow[fieldName] = false;
      } else if (value.indexOf(",") === -1) {
        targetRow[fieldName] = value;
      } else {
        targetRow[fieldName] = value.split(",");
      }
      cache[rowIdx] = targetRow;
      const changed = new Set(this.state.changed);
      changed.add(targetRow);
      this.setState({
        cache: [...cache],
        changed: [...changed]
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { changed } = this.state;
    this.props.onSubmit(changed);
    this.props.history.push("/");
  };

  handleReject = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { changed } = this.state;
    return (
      <div>
        <InnerEditTable
          onCellEdit={this.handleCellEdit}
          data={this.getDataToShow()}
        />
        <button
          onClick={this.handleSubmit}
          style={{
            margin: "15px 15px 15px 0px",
            width: "100px",
            "a:focus": "outline: 0; text-decoration: none"
          }}
          type="submit"
          disabled={changed.length === 0}
          className="btn btn-primary"
        >
          Submit
        </button>
        <button
          onClick={this.handleReject}
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
      condition: PropTypes.bool.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  checked: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
};

export default withRouter(EditTable);
