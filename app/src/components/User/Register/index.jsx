import React from 'react';
import { Link } from 'react-router-dom';
import validationService from '../../../services/validationService';
import userService from '../../../services/userService';
import MappleToolTip from 'reactjs-mappletooltip';

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
                username: 'Username is required!',
                password: 'Password is required!',
                confirmPassword: 'Confirm password is required!',
                firstName: 'First name is required!',
                lastName: 'Last name is required!',
                email: 'Email is required!',
                age: 'Age is required!',
                gender: 'Gender is required!'
            },
            // isRedirect: false
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                if (this.state.usernames.includes(value)) {
                    errors.username = 'Username already exist';
                } else if (value.length < 3) {
                    errors.username = 'Username should be at least 3 characters long!';
                } else {
                    errors.username = '';
                }
                break;
            case 'password':
                errors.password = value.length < 3 ? 'Password should be at least 3 characters long!' : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== this.state.password ? 'Passwords don\'t match!' : '';
                break;
            case 'firstName':
                errors.firstName = !validationService.userNamesValidation(value) ? 'First name should be more than 2 symbols and contains only letters!' : '';
                break;
            case 'lastName':
                errors.lastName = !validationService.userNamesValidation(value) ? 'Last name should be more than 2 symbols and contains only letters!' : '';
                break;
            case 'email':
                errors.email = !validationService.registerEmailValidation(value) ? 'Invalid email!' : '';
                break;
            case 'age':
                errors.age = value < 16 || value > 100 ? 'Age should be between 16 and 100!' : '';
                break;
            case 'gender':
                errors.gender = value === ' Select gender' ? 'Gender is required!' : '';
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
                // this.setState({ isRedirect: true });
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
            // this.state.isRedirect ? <Redirect to="/login" /> :
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
                                        <input type="text" className="form-control" name="username" onChange={this.changeHandler} placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {/* <input type="text" className="form-control" name="username" disabled value={errors.username.length === 0 ? <div className="alert alert-success"><i className="fa fa-check"></i> Username is correct</div> : <div className="alert alert-warning"><i className="fa fa-exclamation-triangle"></i> {errors.username}</div>} /> */}
                                    {/* {errors.username.length === 0 ? <div onMouseOver={this.showHover} className="align-middle text-success"><i className="fa fa-check"></i> Username is correct</div> : <div className="align-middle text-danger"><i className="fa fa-exclamation-triangle"></i> {errors.username}</div>} */}
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
                                        <input type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" />
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
                                        <input type="password" className="form-control" name="confirmPassword" onChange={this.changeHandler} noValidate placeholder="Confirm Password" />
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
                                        <input type="text" className="form-control" name="email" onChange={this.changeHandler} placeholder="E-mail" />
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
                                        <input type="text" className="form-control" name="firstName" onChange={this.changeHandler} noValidate placeholder="First Name" />
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
                                        <input type="text" className="form-control" name="lastName" onChange={this.changeHandler} placeholder="Last Name" />
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
                                        <input type="number" className="form-control" name="age" onChange={this.changeHandler} placeholder="Age" />
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
        )
    }
};

export default Register;