import React, { Fragment } from 'react';

const About = () => {
    return (
        <div className="container">
            <br />
            <div className="card bg-light">
                <article className="card-body mx-auto">
                    <h1 class="text-center">About Sport Data Center</h1>
                    <br/>
                    <div class="row">
                        <div class="col-md-3 text-center text-primary">
                            <i class="fab fa-stripe-s fa-10x"></i>
                        </div>
                        <div class="col-md-6">
                            <h5>
                                Sport Data Center is a web application for sport events around the world. Its purpose is to connect people with the same interests of sport and to allow them to join any event they wish.
                                It is intended for organizations, which want to set a sport event, and for athletes, who want to join an event - both for professionals and amateurs.
                    </h5>
                            <br />
                            <h5>
                                Sport Data Center eases the process of taking part of sport event and by that it provokes for the realization of young athletes.
                    </h5>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
};

export default About;