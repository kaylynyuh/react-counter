import React from 'react';

import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  
  render() {
    const {count} = this.state;
    
    return(
      <div className="counter">
        <button onClick={this.decrement}>
          Minus 
        </button>
        Counter: {count}
        <button onClick={this.increment}>
          Add 
        </button>
      </div>
    )
  }
}

export default Counter;