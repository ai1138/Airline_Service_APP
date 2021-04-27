

import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Register {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
		<p>Enter your date of birth::</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
		<p>Enter your password:</p>
      <input
        type='text'
        name='password'
        onChange={this.myChangeHandler}
      />
		<p>Enter your local address:</p>
      <input
        type='text'
        name='address'
        onChange={this.myChangeHandler}
      />
		<p>Enter your phone number:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
		<p>Enter your passport number:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
		<p>Enter your passport expiration date:</p>
		<input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
		<p>Enter your passport country:</p>
		<input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default MyForm

ReactDOM.render(<MyForm />, document.getElementById('root'));