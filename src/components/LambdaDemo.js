import React, {Component} from 'react';
import Lottie from 'react-lottie';
import * as animationData from './../bike.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => {
        this.setState({loading: false, msg: json.userId})
      });
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
      <Lottie
        options={defaultOptions}
        speed={0.5}
        height={400}
        width={400}
      />
    </p>
  }
}

export default LambdaDemo;
