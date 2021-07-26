import React, {Component} from "react";

class Buttons extends Component
{

    render(){
        return(
            <div className={`column-${this.props.cols}`}>
                <button class="calc-button" onClick={()=>{this.props.action(this.props.symbol)}}>{this.props.symbol}</button>
            </div>
        )
    }
}
export default Buttons;