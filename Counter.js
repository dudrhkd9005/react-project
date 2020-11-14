import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  state = {
    number: 0,
    foo: {
      foobar: 2
    }
  };

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    if(this.state.number > 0)
      this.setState(
        ({ number }) => ({
          number: number - 1
        })
      );
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }








  // state = {
  //   number: 0
  // }
  //
  // constructor(props) {
  //   super(props);
  //   console.log('constructor');
  // }
  //
  // componentWillMount() {
  //   console.log('componentWillMount (deprecated)');
  // }
  //
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   // 5 의 배수라면 리렌더링 하지 않음
  //   console.log('shouldComponentUpdate');
  //   if (nextState.number % 5 === 0) return false;
  //   return true;
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate');
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  // }
  //
  //
  // handleIncrease = () => {
  //   const { number } = this.state;
  //   this.setState({
  //     number: number + 1
  //   });
  // }
  //
  // handleDecrease = () => {
  //   this.setState(
  //     ({ number }) => ({
  //       number: number - 1
  //     })
  //   );
  // }
  //
  // render() {
  //   console.log('render');
  //   return (
  //     <div>
  //       <h1>카운터</h1>
  //       <div>값: {this.state.number}</div>
  //       <button onClick={this.handleIncrease}>+</button>
  //       <button onClick={this.handleDecrease}>-</button>
  //     </div>
  //   );
  // }

}
export default Counter;
