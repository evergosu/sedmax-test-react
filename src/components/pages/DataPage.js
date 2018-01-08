import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCheckedItems } from "../../actions";
import DataTable from "../tables/DataTable";

const DataPage = ({ data, handleCheckedItems }) => (
  <div>
    <h1>Data Page</h1>
    <DataTable
      data={data}
      onLinkClicked={checkedItems => handleCheckedItems(checkedItems)}
    />
  </div>
);

DataPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      condition: PropTypes.bool.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  handleCheckedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  handleCheckedItems: checkedItems => {
    dispatch(updateCheckedItems(checkedItems));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
