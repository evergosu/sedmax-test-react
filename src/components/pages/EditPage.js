import React from "react";
import EditTable from "../tables/EditTable";
import Tree from "../Tree";

class EditPage extends React.Component {
  submit = data => {
    console.log(data);
  };
  reject = () => {
    console.log("Rejected");
  };

  render() {
    return (
      <div>
        <h1>Edit Page</h1>
        <Tree />
        <EditTable submit={this.submit} reject={this.reject} />
      </div>
    );
  }
}

export default EditPage;
