import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  changeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: "",
      hometown: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <input onChange={this.changeForm} value={this.state.hometown} name="hometown" type="text"></input>
          <input onChange={this.changeForm} value={this.state.username} name="username" type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
