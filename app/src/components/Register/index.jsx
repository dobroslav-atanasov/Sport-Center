import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import userService from '../../services/userService';

const formValidation = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );

    return valid;
}

const emailValidationRegex = RegExp(/[\w]+@[a-z]+\.com/i);

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
            gender: '',
            errors: {
                username: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                email: '',
                age: ''
            },
            isRedirect: false
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'username':
                errors.username = value.length < 3 ? 'Username should be at least 3 characters long!' : '';
                break;
            case 'password':
                errors.password = value.length < 3 ? 'Password should be at least 3 characters long!' : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== this.state.password ? 'Passwords don\'t match!' : '';
                break;
            case 'firstName':
                errors.firstName = value.length === 0 ? 'First name is required!' : '';
                break;
            case 'lastName':
                errors.lastName = value.length === 0 ? 'Last name is required!' : '';
                break;
            case 'email':
                errors.email = !emailValidationRegex.test(value) ? 'Invalid email!' : '';
                break;
            case 'age':
                errors.age = value < 16 || value > 100 ? 'Age should be between 16 and 100!' : '';
                break;
            default:
                break;
        };

        this.setState({ errors, [name]: value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        if (formValidation(this.state.errors)) {
            userService.register(data).then(() => {
                this.setState({ isRedirect: true });
            });
        }
    };

    render() {
        const { errors } = this.state;
        return (
            this.state.isRedirect ? <Redirect to="/login" /> :
                <div className="container">
                    <br />
                    <div className="card bg-light">
                        <article className="card-body mx-auto">
                            <h3 className="card-title mt-3 text-center">Create Account</h3>
                            <hr />
                            <form onSubmit={this.submitHandler}>
                                {/* USERNAME */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" name="username" onChange={this.changeHandler} placeholder="Username" />
                                </div>
                                {errors.username.length > 0 && <div className="alert alert-danger">{errors.username}</div>}

                                {/* PASSWORD */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" />
                                </div>
                                {errors.password.length > 0 && <div className="alert alert-danger">{errors.password}</div>}

                                {/* CONFIRM PASSWORD */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input type="password" className="form-control" name="confirmPassword" onChange={this.changeHandler} noValidate placeholder="Confirm Password" />
                                </div>
                                {errors.confirmPassword.length > 0 && <div className="alert alert-danger">{errors.confirmPassword}</div>}

                                {/* FIRST NAME */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" name="firstName" onChange={this.changeHandler} noValidate placeholder="First Name" />
                                </div>
                                {errors.firstName.length > 0 && <div className="alert alert-danger">{errors.firstName}</div>}

                                {/* LAST NAME */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" name="lastName" onChange={this.changeHandler} placeholder="Last Name" />
                                </div>
                                {errors.lastName.length > 0 && <div className="alert alert-danger">{errors.lastName}</div>}

                                {/* EMAIL */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="text" className="form-control" name="email" onChange={this.changeHandler} placeholder="Email" />
                                </div>
                                {errors.email.length > 0 && <div className="alert alert-danger">{errors.email}</div>}

                                {/* AGE */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-table"></i></span>
                                    </div>
                                    <input type="number" className="form-control" name="age" onChange={this.changeHandler} placeholder="Age" />
                                </div>
                                {errors.age.length > 0 && <div className="alert alert-danger">{errors.age}</div>}

                                {/* GENDER */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-male"></i></span>
                                    </div>
                                    <select className="form-control" name="gender" onChange={this.changeHandler}>
                                        <option selected=""> Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                {/* SUBMIT */}
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