import React, {Component} from 'react';
import Pusher from 'pusher-js';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null, pusherMsg: null};
  }

  componentDidMount() {
    const pusher = new Pusher('2bca14c0b564be3a74b8', {
      cluster: 'eu',
      encrypted: true
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', data => {
      this.setState({pusherMsg: data.message});
    });
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      // .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg, pusherMsg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{pusherMsg}</span>
    </p>
  }
}

export default LambdaDemo;
