import React from "react";
import CheckboxTree from "react-checkbox-tree";

const nodes = [
  {
    value: "/people",
    label: "people",
    children: [
      {
        value: "/people/guys",
        label: "guys",
        children: [
          {
            value: "/people/guys/Good Guy",
            label: "Good Guy"
          },
          {
            value: "/people/guys/Cool Guy",
            label: "Cool Guy"
          },
          {
            value: "/people/guys/Bad Guy",
            label: "Bad Guy"
          }
        ]
      }
    ]
  }
];

class Tree extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: [],
      expanded: ["/people", "/people/guys"]
    };
  }

  onCheck = checked => {
    this.setState({ checked });
  };

  onExpand = expanded => {
    this.setState({ expanded });
  };

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        checked={checked}
        expanded={expanded}
        nodes={nodes}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
      />
    );
  }
}

export default Tree;
