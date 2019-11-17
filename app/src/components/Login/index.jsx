import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3333/get')
            .then((response) => response.json())
            .then((myJson) => console.log(myJson))

    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Log In</h3>
                        <hr />
                        <form>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" name="username" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input type="password" class="form-control" name="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Log In</button>
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