import React,{Component} from 'react';

class SelectDate extends Component{
    constructor()
    {
        super();
        this.state={searchDate:''}
    }
    
    render() {
        return(
            <div>
            <input onChange={event=>this.setState({searchDate:event.target.value})}/>
            <br/>
            You Entered: {this.state.searchDate}
            </div>
        )
    }
}

export default SelectDate;