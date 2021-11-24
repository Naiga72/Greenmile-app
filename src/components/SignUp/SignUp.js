import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const initialState = {
    username: "",
    email: "",
    password: "",
    password2: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    password2Error: ""
}

export default class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = initialState;
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      };
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      validate = () => {
        let usernameError= "";
        let emailError= "";
        let passwordError= "";
        let password2Error= "";

        // username validation
        if (!this.state.username) {
            usernameError = "username required";
        } else if (this.state.username.length < 5) {
            usernameError = "username should have a minimum of 5 characters";
        }

        // email validation
        if (!this.state.email) {
            emailError = "email required"
        } else if (!this.state.email.includes('@')) {
            emailError = "email is invalid";
        } 
    
        // password validation
        if (!this.state.password) {
            passwordError = "Password required";
        }  else if (this.state.password.length < 7) {
            passwordError = "password should have a minimum of 7 characters";
        }

        // confirm password validation
        if (!this.state.password2) {
            password2Error = "Password required";
        }  else if (this.state.password2 !== this.state.password) {
            password2Error = "Passwords do not match";
        }

        // errors
        if (emailError || usernameError || passwordError || password2Error) {
            this.setState({emailError, usernameError, passwordError, password2Error});
            return false;
        }

        return true;
      }
    
    handleSubmit =(event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            // clear form
            this.setState(initialState);
        }

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios
          .post(``, { user })
          .then(res => {
              console.log(res);
              console.log(res.data);
          })
          .catch(err => {
                console.log(err);
          });
    }

    render() { 
        return (
            <>
            <div className="form-container">
                <div className="form-content-left">
                    <img src="" alt="spaceship" 
                    className="form-img"/>
                </div>
                <div className="form-content-right">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Get started with us today!
                            Create your account by filling 
                            out the information below.
                        </h1>
                        <div className="form-inputs">
                            <label htmlFor="username" 
                            className="form-label">Username: 
                            </label>
                            <input 
                            id="username"
                            type="text" 
                            name="username"
                            className="form-input"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.usernameError}</div>
                        </div> 
                        <div className="form-inputs">
                            <label htmlFor="email" 
                            className="form-label">Email: 
                            </label>
                            <input 
                            id="email"
                            type="email" 
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}</div>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password" 
                            className="form-label">Password: 
                            </label>
                            <input 
                            id="password"
                            type="password" 
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}</div>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password2" 
                            className="form-label">
                                Confirm Password: 
                            </label>
                            <input 
                            id="password2"
                            type="password" 
                            name="password2"
                            className="form-input"
                            placeholder="Repeat password"
                            value={this.state.password2}
                            onChange={this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.password2Error}</div>
                        </div>
                        <button className="form-input-btn"
                        type="submit">Sign up</button>
                        <span className="form-input-login">
                            Already have an account? Login 
                            <Router>
                                <Link to="/login"> here</Link>
                            </Router>
                        </span>
                    </form>
            </div>
        </div>
        </>
        );
    }
}
