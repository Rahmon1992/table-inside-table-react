import React from "react";

export default class TableRow extends React.Component{
    handleClick(e){
        e.preventDefault();
        this.props.onClick();
    }
    render() {
        const{person} = this.props;
        return(
            <tr>
            <td>{person.Id}</td>
            <td>{person.Name}</td>
            <td>{person.YearOfBirth}</td>
            <td>
            <a href="#" onClick={(e)=>{this.handleClick(e);}} >{person.NumChildren}</a>
            </td>
            <td class="display-900-none">{person.Profession}</td>
            </tr>)
    }
}


