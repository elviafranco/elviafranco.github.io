import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Thumbnail from "./../../Thumbnail";
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import QTFilm from "../Work/QTFilm.png";
import friendFinder from "../Work/friendfinder.png";
import clickyGame from "../Work/FriendsClickyGame.png";
import gambit from "../Work/GGM.png";
import burgerApp from "../Work/burgerApp.png";
import scrapeNews from "../Work/TimeScrapeNews.png";


const WorkPage = () => {
    return (
        <Container>
            <Row>
                <h2> Work </h2>
                <CardGroup>
                    <CardColumns>

                        <Thumbnail
                            img={QTFilm}
                            title="Quentin Tarantino Film Trivia"
                            summary="Interactive timed trivia game created with JavaScript, jQuery, CSS 3 and HTML 5"
                            code="https://github.com/elviafranco/TriviaGame"
                            link="https://elviafranco.github.io/TriviaGame/"
                        >
                        </Thumbnail>

                        <Thumbnail
                            img={friendFinder}
                            title="Friend Finder"
                            summary="A compatibility-based full-stack application which takes user input from the application survey and runs compatibility logic to return the users best friend match."
                            code="https://github.com/elviafranco/FriendFinder"
                            link="https://dry-brook-53737.herokuapp.com/"
                        >
                        </Thumbnail>

                        <Thumbnail
                            img={clickyGame}
                            title="Friends Clicky Game"
                            summary="Memory game created with React.js that responds to user events and manages component state."
                            code="https://github.com/elviafranco/clicky-game"
                            link="https://elviafranco.github.io/clicky-game/"
                        >
                        </Thumbnail>

                        <Thumbnail
                            img={gambit}
                            title="Gambit Game Management"
                            summary="Full-stack inventory management application which retrieves data from a sever-side API and includes user login and user account management functionality."
                            code="https://github.com/jonpking/MarvelousVolleyBluehairsProject2"
                            link="https://game-inventory.herokuapp.com/"
                        >
                        </Thumbnail>

                        <Thumbnail
                            img={burgerApp}
                            title="Eat-The-Burger"
                            summary="A burger log application built with Sequelize, Node, Express, and Handelbars."
                            code="https://github.com/elviafranco/Sequelized_Burger"
                            link="https://secret-shelf-96403.herokuapp.com/"
                        >
                        </Thumbnail>

                        <Thumbnail
                            img={scrapeNews}
                            title="Time Scrape News"
                            summary="Time Scrape News is a web application which scrapes US crime news articles and allows users to view and leave comments on the latest news."
                            code="https://github.com/elviafranco/scrape-news"
                            link="https://shielded-refuge-51260.herokuapp.com/"
                        >
                        </Thumbnail>

                     

                    </CardColumns>
                </CardGroup>
            </Row>
        </Container>

    )
}

export default WorkPage;