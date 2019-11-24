import React from 'react';
import { Link } from 'react-router-dom';

import userService from '../../services/userService';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            gender: ''
        };
    };

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        userService.register(data).then(() => console.log('FINISH'));
    };

    usernameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    };

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value });
    };

    confirmPasswordChangeHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    };

    firstNameChangeHandler = (event) => {
        this.setState({ firstName: event.target.value });
    };

    lastNameChangeHandler = (event) => {
        this.setState({ lastName: event.target.value });
    };

    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value });
    };

    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value });
    };

    genderChangeHandler = (event) => {
        this.setState({ gender: event.target.value });
    };

    render() {
        return (
            <div className="container">
                <br />
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Create Account</h3>
                        <hr />
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.username} onChange={this.usernameChangeHandler} placeholder="Username" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.passwordChangeHandler} placeholder="Password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input type="password" className="form-control" value={this.state.confirmPassword} onChange={this.confirmPasswordChangeHandler} placeholder="Confirm Password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.firstName} onChange={this.firstNameChangeHandler} placeholder="First Name" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.lastName} onChange={this.lastNameChangeHandler} placeholder="Last Name" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.email} onChange={this.emailChangeHandler} placeholder="Email" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-table"></i></span>
                                </div>
                                <input type="number" className="form-control" value={this.state.age} onChange={this.ageChangeHandler} placeholder="Age" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-male"></i></span>
                                </div>
                                <select className="form-control" value={this.state.gender} onChange={this.genderChangeHandler}>
                                    <option selected=""> Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-warning btn-block">Create Account</button>
                            </div>
                            <p class="text-center">Have an account? <Link to="/login">Log In</Link></p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
};

export default Register;