import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

// as we want to make a counter, lets create a method (function) to add
    increment() {
        this.setState({ // set the state
            counter: this.state.counter + 1, // getting the counter value (0) and adding one. We now need to set an event handler.
        });
    }

    decrement() {
        this.setState({ // set the state
            counter: this.state.counter - 1, // getting the counter value (0) and adding one. We now need to set an event handler.
        });
    }

// add a decrement method
    render() {
        return (
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>Increase</button>
                <button onClick={() => this.decrement()}>Decrease</button>
                {/* event handler - again, we will go in to more detail in future lessons. Notice the different syntax of the onClick event? Your counter should now increment by one. */}
            </>
        )
    }
}
export default Counter;