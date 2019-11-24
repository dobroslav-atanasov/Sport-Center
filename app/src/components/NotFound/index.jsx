import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const NotFount = () => {
    return (
        <Fragment>
            <div className="text-center">
                <img src="NotFound.png" className="img-fluid" alt="Not Found"></img>
            </div>
            <div className="text-center">
                <Link to="/">
                    <Button color="warning" size="lg">Back to home</Button>
                </Link>
            </div>
        </Fragment>
    )
};

export default NotFount;