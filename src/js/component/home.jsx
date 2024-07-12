import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container flex-grow-1">
                <Jumbotron />
                <div className="row">
                    <Card 
                        title="Card 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        buttonText="Find Out More!"
                    />
                    <Card 
                        title="Card 2"
                        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        buttonText="Find Out More!"
                    />
                    <Card 
                        title="Card 3"
                        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        buttonText="Find Out More!"
                    />
                    <Card 
                        title="Card 4"
                        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        buttonText="Find Out More!"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
