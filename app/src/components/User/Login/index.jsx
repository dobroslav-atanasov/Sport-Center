import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../../services/userService';
import constants from '../../../constants/constants';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: ''
        };
    };

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        userService.login(data).then(res => {
            if (res === constants.login.INVALID_USERNAME_PASSWORD) {
                this.setState({ errors: res });
            } else {
                this.props.history.push('/');
            }
        });
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Log In</h3>
                        <hr />
                        <form onSubmit={this.submitHandler}>
                            {/* USERNAME */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input id="username" type="text" className="form-control" name="username" onChange={this.changeHandler} placeholder="Username" />
                            </div>

                            {/* PASSWORD */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input id="password" type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" />
                            </div>
                            {errors.length > 0 && <div className="alert alert-danger"><i className="fa fa-exclamation-triangle"></i> {errors}</div>}

                            {/* SUBMIT */}
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger btn-block">Log In</button>
                            </div>
                            <p className="text-center">Don't have account? <Link to="/register">Create Account</Link></p>
                        </form>
                    </article>
                </div>
            </div>
        );
    };
};

export default Login;