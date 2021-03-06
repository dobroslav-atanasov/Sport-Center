import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const NotFount = () => {
    return (
        <Fragment>
            <div className="text-center" style={{ marginTop: 30, marginBottom: 50 }}>
                <img src="NotFound.png" className="img-fluid" alt="Not Found"></img>
            </div>
            <div className="text-center">
                <Link to="/">
                    <Button color="danger" size="lg">Back to home</Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default NotFount;