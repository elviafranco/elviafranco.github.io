import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import headshot from './IMG_1173.jpg';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CV from "../Profile/EFCV_2020.pdf";

const ProfilePage = () => {
    return (
        <Container>
            <Row>
                <h2> Profile </h2>
                <CardGroup>
                    <CardColumns>
                        {/* 1 */}
                        <Card bg="dark" border="dark" className="efont">
                            <Card.Body>
                                <Card.Text>
                                    Hi, I’m Elvia.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* 2 */}
                        <Card border="secondary">
                            <Card.Img variant="top" src={headshot} />
                        </Card>

                        {/* 3 */}
                        <Card border="dark" bg="dark" text="white">
                            <Card.Body>
                                <Card.Text>
                                    I'm a web developer & designer with a background in process improvement and project management.
                                 </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* 4 */}
                        <Card border="dark">
                            <Card.Body>
                                <Card.Text>
                                    I have experience with object-oriented & user-centered design and prior project planning and project management experience. I'm a quick learner with a passion implementing new tools and technologies for reporting, analysis and overall process improvement.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* 5 */}
                        <Card border="dark">
                            <Card.Body>
                                <Card.Text>
                                    Technical Skills:<br />
                                    Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Adobe XD, AJAX, Bootstrap 4, CSS3, Express, Firebase, Git, Handlebars, Heroku, HTML 5, JavaScript, JQuery, MongoDB, MySQL, Node.JS, NPM, React, Sequelize
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* 6 */}
                        <Card border="dark" bg="dark" text="white">
                            <Card.Body>
                                <Card.Title>Contact Me</Card.Title>
                                <Card.Text>
                                    <div className="icon">
                                        <a href="https://www.linkedin.com/in/elviafranco/"><FontAwesomeIcon icon={faLinkedin} id="linked" /></a>
                                        <a href="https://github.com/elviafranco"><FontAwesomeIcon icon={faGithub} id="git" /></a>
                                        <a href="mailto:evfranco@asu.edu"><FontAwesomeIcon icon={faEnvelope} id="envelope" /></a>
                                        <a href={CV}><FontAwesomeIcon icon={faFilePdf} id="pdf" /></a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </CardColumns>

                </CardGroup>
            </Row>
        </Container>

    )
}

export default ProfilePage;