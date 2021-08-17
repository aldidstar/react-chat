import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";


export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/register`, {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name

      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token )
        localStorage.setItem("name", response.data.data.name);
        window.location = '/ChatBox'
      });

    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div className="container-register">
          <h1 id="register-font">Register</h1>
          <div className="form-password">
            <label>
              Name:
              <input
              className="form-control"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />{" "}
            </label>
          </div>
          <div className="form-email">
            <label >
              Email:
              <input
              className="form-control"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />{" "}
            </label>
          </div>
          <div className="form-password">
            <label>
              Password:
              <input
              className="form-control"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />{" "}
            </label>
          </div>
      
          <br></br>
          <button
            id="btn-register"
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            value="Register"
          >
           <Link id="btn-register" to="/ChatBox">Register</Link>
          </button>
         
        </div>
      </form>
    );
  }
}
// }
