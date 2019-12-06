import React from 'react';
import { Link } from 'react-router-dom';
import validationService from '../../../services/validationService';
import userService from '../../../services/userService';
import MappleToolTip from 'reactjs-mappletooltip';
import constants from '../../../constants/constants';

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
            usernames: [],
            errors: {
                username: constants.register.USERNAME_REQUIRED,
                password: constants.register.PASSWORD_REQUIRED,
                confirmPassword: constants.register.CONFIRM_PASSWORD_REQUIRED,
                firstName: constants.register.FIRST_NAME_REQUIRED,
                lastName: constants.register.LAST_NAME_REQUIRED,
                email: constants.register.EMAIL_REQUIRED,
                age: constants.register.AGE_REQUIRED,
                gender: constants.register.GENDER_REQUIRED
            }
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                if (this.state.usernames.includes(value)) {
                    errors.username = constants.register.USERNAME_EXIST;
                } else if (!validationService.usernameValidation(value)) {
                    errors.username = constants.register.INVALID_USERNAME;
                } else {
                    errors.username = '';
                }
                break;
            case 'password':
                errors.password = !validationService.passwordValidation(value) ? constants.register.INVALID_PASSWORD : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = !validationService.passwordMatchValidation(value, this.state.password) ? constants.register.PASSWORD_MATCH : '';
                break;
            case 'firstName':
                errors.firstName = !validationService.userNamesValidation(value) ? constants.register.INVALID_FIRST_NAME : '';
                break;
            case 'lastName':
                errors.lastName = !validationService.userNamesValidation(value) ? constants.register.INVALID_LAST_NAME : '';
                break;
            case 'email':
                errors.email = !validationService.registerEmailValidation(value) ? constants.register.INVALID_EMAIL : '';
                break;
            case 'age':
                errors.age = !validationService.registerAgeValidation(value) ? constants.register.INVALID_AGE : '';
                break;
            case 'gender':
                errors.gender = validationService.compareStringValidation(value, ' Select gender') ? constants.register.GENDER_REQUIRED : '';
                break;
            default:
                break;
        };

        this.setState({ errors, [name]: value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        if (validationService.formValidation(this.state.errors)) {
            userService.register(data).then((data) => {
                this.props.history.push('/login');
            });
        }
    };

    componentDidMount = () => {
        userService.getUsernames()
            .then(usernames => {
                this.setState({ usernames: usernames });
            });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Create Account</h3>
                        <hr />
                        <h4 className="card-title mt-3 text-center">User Info</h4>
                        <form onSubmit={this.submitHandler}>
                            {/* USERNAME */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input id="username" type="text" className="form-control" name="username" onChange={this.changeHandler} placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.username.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Username is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.username}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input id="password" type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.password.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Password is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.password}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input id="confirmPassword" type="password" className="form-control" name="confirmPassword" onChange={this.changeHandler} noValidate placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.confirmPassword.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Confirm Password is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.confirmPassword}</div></MappleToolTip>}
                                </div>
                            </div>

                            <h4 className="card-title mt-3 text-center">Personal Info</h4>

                            {/* EMAIL */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                        </div>
                                        <input id="email" type="text" className="form-control" name="email" onChange={this.changeHandler} placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.email.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">E-mail is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.email}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* FIRST NAME */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input id="firstName" type="text" className="form-control" name="firstName" onChange={this.changeHandler} noValidate placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.firstName.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">First name is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.firstName}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* LAST NAME */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input id="lastName" type="text" className="form-control" name="lastName" onChange={this.changeHandler} placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.lastName.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Last name is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.lastName}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* AGE */}
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-table"></i></span>
                                        </div>
                                        <input id="age" type="number" className="form-control" name="age" onChange={this.changeHandler} placeholder="Age" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {errors.age.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Age is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.age}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* GENDER */}
                            <div className="row">
                                <div className="col-md-10">
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
                                </div>
                                <div className="col-md-2">
                                    {errors.gender.length === 0
                                        ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Gender is correct!</div></MappleToolTip>
                                        : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.ge}</div></MappleToolTip>}
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <div class="form-group">
                                <button type="submit" class="btn btn-danger btn-block">Create Account</button>
                            </div>
                            <p class="text-center">Have an account? <Link to="/login">Log In</Link></p>
                        </form>
                    </article>
                </div>
            </div>
        );
    };
};

export default Register;