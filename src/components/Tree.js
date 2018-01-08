import React from "react";
import PropTypes from "prop-types";
import CheckboxTree from "react-checkbox-tree";

const Tree = ({ data, checked, expanded, onCheckItem, onExpandFolder }) => {
  const getTree = () => {
    const [{ ...firstUser }, { ...secondUser }, { ...thirdUser }] = data;
    return [
      {
        value: "/people",
        label: "people",
        children: [
          {
            value: "/people/guys",
            label: "guys",
            children: [
              {
                value: "1",
                label: firstUser.name
              },
              {
                value: "2",
                label: secondUser.name
              },
              {
                value: "3",
                label: thirdUser.name
              }
            ]
          }
        ]
      }
    ];
  };

  return (
    <CheckboxTree
      checked={checked}
      expanded={expanded}
      nodes={getTree()}
      onCheck={onCheckItem}
      onExpand={onExpandFolder}
    />
  );
};

Tree.propTypes = {
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
  onCheckItem: PropTypes.func.isRequired,
  onExpandFolder: PropTypes.func.isRequired
};

export default Tree;
