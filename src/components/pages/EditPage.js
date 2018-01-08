import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditTable from "../tables/EditTable";
import Tree from "../Tree";
import {
  updateCheckedItems,
  updateExpandedFolders,
  updateChangedItems
} from "../../actions";

const EditPage = ({
  data,
  checked,
  expanded,
  handleCheckedItems,
  handleExpandedFolders,
  handleChangedItems
}) => (
  <div>
    <h1>Edit Page</h1>
    <Tree
      data={data}
      checked={checked}
      expanded={expanded}
      onCheckItem={checkedItems => handleCheckedItems(checkedItems)}
      onExpandFolder={expandedFolders => handleExpandedFolders(expandedFolders)}
    />
    <EditTable
      data={data}
      checked={checked}
      onSubmit={changedItems => handleChangedItems(changedItems)}
    />
  </div>
);

EditPage.propTypes = {
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
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheckedItems: PropTypes.func.isRequired,
  handleExpandedFolders: PropTypes.func.isRequired,
  handleChangedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  checked: state.checkedItems,
  expanded: state.expandedFolders
});

const mapDispatchToProps = dispatch => ({
  handleCheckedItems: checkedItems =>
    dispatch(updateCheckedItems(checkedItems)),
  handleExpandedFolders: expandedFolders =>
    dispatch(updateExpandedFolders(expandedFolders)),
  handleChangedItems: changedItems => dispatch(updateChangedItems(changedItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
