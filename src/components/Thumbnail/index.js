import React from "react";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faWindowMaximize, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Thumbnail = (props) => {
    return (
        <Card bg="dark" border="dark" text="white"
        // style={{ width: '18rem' }}
        >
            <Card.Img
                variant="top"
                src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.summary}
                </Card.Text>
                <div className="icon">
                            <a href={props.code}><FontAwesomeIcon icon={faFileCode} id="code"/></a>
                            {/* <a href={props.link}><FontAwesomeIcon icon={faWindowMaximize} id="link"/></a> */}
                            <a href={props.link}><FontAwesomeIcon icon={faLaptopCode} id="link"/></a>
                        </div>
            </Card.Body>
        </Card>
    )
}

export default Thumbnail;