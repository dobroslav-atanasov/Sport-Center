import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container">
            <br />
            <div className="card bg-light">
                <article className="card-body mx-auto">
                    <h3 className="card-title mt-3 text-center">Create Account</h3>
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
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                            </div>
                            <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" name="firstName" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" name="lastName" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                            </div>
                            <input type="text" name="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-table"></i></span>
                            </div>
                            <input type="number" name="age" className="form-control" placeholder="Age" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-male"></i></span>
                            </div>
                            <select className="form-control">
                                <option selected=""> Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                        </div>
                        <p class="text-center">Have an account? <Link to="/login">Log In</Link></p>
                    </form>
                </article>
            </div>
        </div>
    )
};

export default Register;