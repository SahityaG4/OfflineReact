// class component
import React from 'react';


class CC extends React.Component{
    constructor(){
        super();

        this.state = {
            count : 0
        }
    }

    changeCount = () =>{
        this.setState(
            {count : this.state.count+ 1}
        );
    }

    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.changeCount}>increment</button>
            </>
        )
    }
}

export default CC;