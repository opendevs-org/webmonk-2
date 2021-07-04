import React from 'react';

class Child extends React.Component{
    componentDidMount (){
        console.log("[Child - componentDidMount]")
    }
    componentWillUnmount () {
        console.log("[Child - componentWillUnmount]");
    }
    render(){
        console.log("[Child - render]")
        return (
            <div>
                Child Loaded...
            </div>
        )
    }
}

export default Child;