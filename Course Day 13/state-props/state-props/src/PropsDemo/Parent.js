import React from "react";
import Child from './Child'

// Class based component
class Parent extends React.Component {
    state = {
        counter: 0
    };
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    reset = () => {
        this.setState({
            counter: 0
        })
    }
    render() {
        return (
            <div>
                <Child count={this.state.counter} />
                <button className="add" onClick={this.increment}>+</button>
                <button className="subtract" onClick={this.decrement}>-</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Parent;