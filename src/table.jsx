import React from "react";
import TableRow from "./tablerow";
import TableRowDetails from "./tablerowdetails";
import Spinner from "./spinner";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  componentDidMount() {
    this.setState({fetchInProgress: true});
    setTimeout(()=>{
      fetch(`http://assignment.siteimprove.com/api/persons`)
      .then(res => res.json()) 
      .then(data => {
          this.setState({ data: data, fetchInProgress : false });
        })
        .catch(error => {console.log(error)});
    },3000);
  }
  handleClick(id){
    this.setState((state) => ({
      clickedId: state.clickedId === id ? undefined : id
    }))
  }
  render() {
    const { data, clickedId } = this.state;
    let elements = [];
    data.forEach((person,index)=>{
      elements.push(<TableRow person={person} key={index} onClick={()=>{this.handleClick(person.Id)}}/>);
      person.Id === clickedId && elements.push(<TableRowDetails person={person} key={'a' + index} index={'a' + index}/>);
    });
    let elements2 = [
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year of Birth</th>
            <th>Number of Children</th>
            <th class="display-900-none">Profession</th>
          </tr>
        </thead>,
      <tbody>
      {
        elements
      } 
   </tbody>];
    return (
      <table class="table">
        {this.state.fetchInProgress 
          ? <Spinner /> :
          elements2
        }
      </table>
    );
  }
}

export default Table;
