import React, {Component} from 'react';
import Buttons from './components/Buttons';
import "./css/style.css";
class Calculator extends Component{

    constructor(props){
        super(props);

        this.state={
            current:'0',
            previous:[],
            isNextActive:'false'
        };
    }

    toClear= ()=>{
        this.setState({current:'0',previous:[],isNextActive:'false'});
    }

    backspace=()=>{
        if(this.state.current==='0')
            return;
        if(this.state.current.length>0)
        {
            this.setState({current:this.state.current.substring(0,this.state.current.length-1)});
        }

    }

    addToCurrent=(symbol)=>{
        if(["/","*","+","-"].indexOf(symbol)>-1)
        {
            let {previous}=this.state;
            previous.push(this.state.current+symbol);
            this.setState({previous,isNextActive:true,current:'0'});
        }
        else{
            if((this.state.current==='0' && this.state.current!=='.') || this.state.isNextActive)
            {
                this.setState({current:symbol,isNextActive:false});
            }
            else
            {
                this.setState({current:this.state.current+symbol});
            } 
        }
          
    }

    evalresult= (symbol)=>{
        let {current,previous,isNextActive}=this.state;
        if(previous.length>0)
        {
            current=eval(String(previous+current));
            this.setState({current,previous:[],isNextActive:false});
        }
    }

    render(){
        const buttons=[
            {symbol:'C',cols:2,action:this.toClear},
            {symbol:'⌫',cols:1,action:this.backspace},
            {symbol:'/',cols:1,action:this.addToCurrent},
            {symbol:'7',cols:1,action:this.addToCurrent},
            {symbol:'8',cols:1,action:this.addToCurrent},
            {symbol:'9',cols:1,action:this.addToCurrent},
            {symbol:'*',cols:1,action:this.addToCurrent},
            {symbol:'4',cols:1,action:this.addToCurrent},
            {symbol:'5',cols:1,action:this.addToCurrent},
            {symbol:'6',cols:1,action:this.addToCurrent},
            {symbol:'-',cols:1,action:this.addToCurrent},
            {symbol:'1',cols:1,action:this.addToCurrent},
            {symbol:'2',cols:1,action:this.addToCurrent},
            {symbol:'3',cols:1,action:this.addToCurrent},
            {symbol:'+',cols:1,action:this.addToCurrent},
            {symbol:'0',cols:2,action:this.addToCurrent},
            {symbol:'.',cols:1,action:this.addToCurrent},
            {symbol:'=',cols:1,action:this.evalresult}
        ];
        return(
            <div className="calculator">
                <div class="result">
                    {this.state.previous.length>-1 ?
                    <div className="pre" >{this.state.previous}</div>
                    :null}
                    <input type="text" className="equations" value={this.state.current} />  
                </div>

                {buttons.map((btn,i)=>{
                    return <Buttons key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol)=>{btn.action(symbol)}} />
                })}
            </div>
        )
    }
}

export default Calculator;