import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.Register = this.Register.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then((response) => {
        console.log(response, 'ppppp')
        if (response.data.data) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('name', response.data.data.name)
          window.location = '/ChatBox'
        } else {
          alert('Login tidak berhasil')
        }
      })
  }

  Register(event) {
    event.preventDefault()
    window.location = '/RegisterForm'
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container-login">
          <h1 id="login-font">Login</h1>
          <div className="form-email">
            <label>
              Email:
              <input
                className="form-control"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />{' '}
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
              />{' '}
            </label>
          </div>
          <br></br>
          <button
            id="btn-register"
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            value="Login"
          >
            <Link id="btn-register" to="/ChatBox">
              Login
            </Link>
          </button>
          <button
            onClick={this.Register}
            id="btn-register"
            className="w-100 btn btn-lg btn-success"
            type="button"
            value="Register"
          >
            <Link id="btn-register" to="/RegisterForm">
              Register
            </Link>
          </button>
        </div>
      </form>
    )
  }
}
// }
