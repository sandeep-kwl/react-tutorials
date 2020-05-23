import React, { Component } from 'react';
// import 'user.css';

class Main extends Component {
  // state = {
  //   message: 'This is state default message',
  //   profile: { name: 'Sandeep' }
  // };

  constructor(props) {
    super(props);

    this.state = {
      message: 'This is state default message',
      profile: { name: 'Sandeep' }
    };
    // this.showDefaultMessage = this.showDefaultMessage.bind(this);
  }

  showDefaultMessage(id, e) {
    this.setState({ message: 'This is updated message' });
  }

  render() {
    return (
      <div className="mx-auto col-6">
        {this.state.message}. This is our main component
        <button
          type="submit"
          className="btn btn-primary"
          onClick={event => this.showDefaultMessage(event, 1)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Main;
