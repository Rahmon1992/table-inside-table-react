import React from "react";
import Spinner from "./spinner";

class ChildrenTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    };
  }
  fetchData() {
    fetch(`http://assignment.siteimprove.com/api/persondetails/` + this.props.id)
      .then(res => res.json())  
      .then(data => {
          this.setState({ data, fetchInProgress : false });
        })
        .catch(error => {});
  }
  componentDidMount() {
    this.setState({fetchInProgress: true});
    if (this.props.index === "a0"){
      setTimeout(()=>{
      this.fetchData();  
      },3000);
    }
    else{
      this.fetchData();
    }
  }
  render() {
    const data = this.state.data;
    let elements = [
      <thead>
      <tr>
        <th>Name</th>
        <th>Year Of Birth</th>
        <th>Mother</th>
      </tr>
      </thead>,
      <tbody>
      {data.map((child, index) => (
        <tr key={index}>
          <td>{child.Name}</td>
          <td>{child.YearOfBirth}</td>
          <td>{child.Mother}</td>
        </tr>
      ))}
      </tbody>];

    return (
      <table class="table">
        { this.props.index === "a0" &&
          this.state.fetchInProgress 
          ? <Spinner /> :
          elements
        }
      </table>
    );
  }
}

export default ChildrenTable;
