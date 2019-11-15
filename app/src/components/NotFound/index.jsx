import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFount = () => {
    return (
        <Fragment>
            <div className="text-center">
                <img src="NotFound.png" className="img-fluid" alt="Not Found"></img>
            </div>
            <div className="text-center">
                <Link to="/">
                    <button type="button" className="btn btn-primary btn-lg">Back to home</button>
                </Link>
            </div>
        </Fragment>
    )
};

export default NotFount;