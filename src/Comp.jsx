import React from 'react';

export default class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1000,
    }
  }

  /**
   * 클래스 기반 컴포넌트 같은 경우
   * 아래의 로그가 찍힌 것을 보면 mount -> (n)update -> unmount가 되는 것을 확인할 수 있다.
   */
  componentDidMount() {
    console.log('mount');
  }

  componentDidUpdate() {
    console.log('update');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return (
      <>
        <h2>{this.state.a}</h2>
        <button onClick={() => this.setState({a: this.state.a + 1})}>submit</button>
      </>
    );
  }
}