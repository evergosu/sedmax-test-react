import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DataTable from "../tables/DataTable";
import { updateCheckedItems } from "../../actions";

const DataPage = ({ data, changeIndex }) => (
  <div>
    <h1>Data Page</h1>
    <DataTable data={data} onLinkClicked={index => changeIndex(index)} />
  </div>
);

DataPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  changeIndex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  checked: state.checkedItems
});

const mapDispatchToProps = dispatch => ({
  changeIndex: index => {
    dispatch(updateCheckedItems(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
