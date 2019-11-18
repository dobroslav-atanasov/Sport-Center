import React from 'react';

const Home = () => {
    const LogoImage = "Wall.jpg"
    return (
        <div class="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${LogoImage})`, height: 780 }}>
            <div class="container">
            </div>
        </div>
    )
};

export default Home;