import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const LogoImage = "Wall.jpg"
    return (
        // <div class="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${LogoImage})`, height: 780 }}>
        //     <div class="container">
        //     </div>
        // </div>
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    )
};

export default Home;