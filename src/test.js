import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LambdaDemo from './components/LambdaDemo';

class Test extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Hello World</h1>
        <Link to="/"><h1>Go back to Home ></h1></Link>
        <LambdaDemo/>
      </div>
    );
  }
}

export default Test;
