import React from "react";
import EditTable from "../tables/EditTable";
import Tree from "../Tree";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  provide = data => {
    this.setState({ data });
    console.log(data);
    console.log(this.state.data);
  };
  submit = data => {
    this.setState({ data });
    console.log(data);
    console.log(this.state.data);
  };
  reject = () => {
    console.log("Rejected");
  };

  render() {
    return (
      <div>
        <h1>Edit Page</h1>
        <Tree />
        <EditTable
          provide={this.provide}
          submit={this.submit}
          reject={this.reject}
        />
      </div>
    );
  }
}

export default EditPage;
