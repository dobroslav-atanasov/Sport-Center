import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import userService from '../../services/userService';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: '',
            // isRedirect: false
        };
    };

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        userService.login(data).then(res => {
            if (res === 'Invalid username or password!') {
                this.setState({ errors: res });
            } else {
                this.props.history.push('/');
                // this.setState({ isRedirect: true });
            }
        });
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            // this.state.isRedirect ? <Redirect to="/" /> :
                <div className="container">
                    <br />
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
                                    <input type="text" className="form-control" name="username" onChange={this.changeHandler} placeholder="Username" />
                                </div>

                                {/* PASSWORD */}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" />
                                </div>
                                {this.state.errors.length > 0 && <div className="alert alert-warning">{this.state.errors}</div>}

                                {/* SUBMIT */}
                                <div class="form-group">
                                    <button type="submit" className="btn btn-danger btn-block">Log In</button>
                                </div>
                                <p class="text-center">Don't have account? <Link to="/register">Create Account</Link></p>
                            </form>
                        </article>
                    </div>
                </div>
        )
    }
}

export default Login;