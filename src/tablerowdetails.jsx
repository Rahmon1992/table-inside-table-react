import React from "react";
import ChildrenTable from "./childrentable";

export default class TableRowDetails extends React.Component{
    render(){
        let {person, index} = this.props;
        return(
            <tr>
                <td colspan="5">
                    <ChildrenTable id={person.Id} index={index} />
                </td>
            </tr>
        )
    }
}