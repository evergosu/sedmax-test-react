import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditTable from "../tables/EditTable";
import Tree from "../Tree";
import { updateCheckedItems, updateExpandedFolders } from "../../actions";

const EditPage = ({
  data,
  checked,
  expanded,
  changeCheckedItems,
  changeExpandedFolders
}) => (
  <div>
    <h1>Edit Page</h1>
    <Tree
      data={data}
      checked={checked}
      expanded={expanded}
      onCheckItem={checkedItems => changeCheckedItems(checkedItems)}
      onExpandFolder={expandedFolders => changeExpandedFolders(expandedFolders)}
    />
    <EditTable
      data={data}
      checked={checked}
      onSubmit={() => console.log("Submitted")}
      onReject={() => console.log("Rejected")}
    />
  </div>
);

EditPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      receivers: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  checked: PropTypes.arrayOf(PropTypes.number).isRequired,
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCheckedItems: PropTypes.func.isRequired,
  changeExpandedFolders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  checked: state.checkedItems,
  expanded: state.expandedFolders
});

const mapDispatchToProps = dispatch => ({
  changeCheckedItems: checkedItems =>
    dispatch(updateCheckedItems(checkedItems)),
  changeExpandedFolders: expandedFolders =>
    dispatch(updateExpandedFolders(expandedFolders))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
