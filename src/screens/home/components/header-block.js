import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const HeaderBlock = (props) => {
    const { title, subtitle, rightComponent = <></> } = props;
    return (
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
            <Col md={{ span: 4, offset: 2 }}>
                <div style={styles.container}>
                    <h3 style={styles.text}>{title}</h3>
                    <p style={styles.text}>{subtitle}</p>
                </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
                {rightComponent}
            </Col>
        </Row>
    )
}

const styles = {
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        height: 100,
        width: 450,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#404040',
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
}