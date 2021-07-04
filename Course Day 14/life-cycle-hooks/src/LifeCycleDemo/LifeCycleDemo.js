import React from 'react';
import Child from './Child'

class LifeCycleDemo extends React.Component {
    state = {
        counter: 0,
        showChild : true
    };
    componentDidMount() {
        console.log("[componentDidMount]");
    }
    componentDidUpdate() {
        console.log("[componentDidUpdate]");
    }
    componentWillUnmount() {
        console.log("[componentWillUnmount]");
    }

    onIncrease = () => {
        console.log('INCREMENT');
        this.setState({
            counter: this.state.counter + 1
        })
    }
    onDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    toggleChild = () => {
        this.setState({showChild : !this.state.showChild})
    }
    render() {
        console.log("[render]")
        return (
            <div>
                <p>Life Cycle is in progress...</p>
                <p>Counter : {this.state.counter} </p>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>

                <button onClick = {this.toggleChild}>Toggle Child</button>

                {this.state.showChild ? <Child /> : null}
            </div>

        )
    }
}

export default LifeCycleDemo;