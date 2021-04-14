import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export const ItemBlock = (props) => {
    const { title, info, location, institution, description, link, doc = false, variant = "" } = props;
    const style = variant === "light" ? styleLight : styleDark
    const showLink = () => {
        if (doc) {

        } else {

        }
    }
    if (props.children) {
        if (title) {
            return (
                <div style={{ marginTop: 5, marginBottom: 5 }}>
                    <label style={style.text}><b>{title}</b></label>
                    <br></br>
                    {props.children}
                </div>
            )
        } else {
            return (

                <div style={{ marginTop: 5, marginBottom: 5 }}>
                    {props.children}
                </div>
            )
        }
    } else {
        if (location) {
            return (
                <Row style={{ marginBottom: 10, width: '100%' }}>
                    <Col md={8}>
                        <label style={style.text}><b>{title}</b></label>
                        <br></br>
                        <label style={style.text}>
                            {info}
                            {description ? <label>{description}</label> : <label></label>}
                        </label>
                    </Col>
                    <Col md={link ? 3 : 4}>
                        <label style={style.text}>
                            <label><b>{institution}</b></label>
                            <br></br>
                            {location}
                        </label>
                    </Col>
                    <Col md={1}>
                        {link && <Button onClick={showLink} variant={style.button.variant}>
                            <FontAwesomeIcon icon={faLink} size="xs" />
                        </Button>
                        }
                    </Col>
                </Row>
            )
        } else {
            return (
                <div style={{ marginBottom: 10 }}>
                    <label style={style.text}>
                        <label><b>{title}</b></label>
                        <br></br>
                        {info}
                    </label>
                </div>
            )
        }

    }

}

const styleDark = {
    button: {
        variant: "outline-dark"
    },
    text: {
        color: "black"
    }
}

const styleLight = {
    button: {
        variant: "outline-light"
    },
    text: {
        color: "#E8E8E8"
    }
}