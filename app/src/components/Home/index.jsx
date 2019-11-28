import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <br />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md">
                        <div class="card" style={{ width: 350 }}>
                            <img src="Sport-2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <Link to="/about" className="btn btn-warning btn-lg">About Us</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div class="card" style={{ width: 350 }}>
                            <img src="Sport-3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <Link to="/about" className="btn btn-warning btn-lg">About Us</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div class="card" style={{ width: 350 }}>
                            <img src="Sport-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <Link to="/about" className="btn btn-warning btn-lg">About Us</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Home;