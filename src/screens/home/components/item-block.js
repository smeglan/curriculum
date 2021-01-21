import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const ItemBlock = (props) => {
    const { title, info, location, institution } = props;
    if (props.children) {
        if (title) {
            return (
                <div style={{ marginTop: 5, marginBottom: 5 }}>
                    <label style={{ fontWeight: 'bold' }}>{title}</label>
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
                        <label style={{ fontWeight: 'bold' }}>{title}</label>
                        <br></br>
                        <label>{info}</label>
                    </Col>
                    <Col md={4}>
                        <label>
                            <label style={{ fontWeight: 'bold' }}>{institution}</label>
                            <br></br>
                            {location}
                        </label>
                    </Col>
                </Row>
            )
        } else {
            return (
                <div style={{ marginBottom: 10 }}>
                    <label >
                        <label style={{ fontWeight: 'bold' }}>{title}</label>
                        <br></br>
                        {info}
                    </label>
                </div>
            )
        }

    }

}