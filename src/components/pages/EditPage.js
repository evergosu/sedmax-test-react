import React from "react";
import EditTable from "../../components/tables/EditTable";

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
        <EditTable submit={this.submit} reject={this.reject} />
      </div>
    );
  }
}

export default EditPage;
