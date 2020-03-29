import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };
  onChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    // this.setState({ userName: event.target.value });
  };
  onSubmitHandler = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3> User Name</h3>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h4>User Name is {this.state.userName}</h4>
          <h3> City</h3>
          <input
            name="city"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h4>City is {this.state.city}</h4>
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}
