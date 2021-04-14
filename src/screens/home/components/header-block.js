import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const HeaderBlock = (props) => {
    const { title, subtitle, rightComponent = <></>, variant = "" } = props;
    const style = variant === "light" ? styleLight : styleDark
    return (
        <div style={style.container}>
            <h3 style={style.text}>{title}</h3>
            <p style={style.text}>{subtitle}</p>
        </div>

    )
}

const styleDark = {
    container: {
        marginTop: 30,
        marginBottom: 30,
        borderStyle: 'solid',
        borderWidth: 1,
        height: 100,
        width: "100%",
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        variant: "outline-dark"
    },
    text: {
        color: "black"
    },
}

const styleLight = {
    container: {
        marginTop: 30,
        marginBottom: 30,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "white",
        height: 100,
        width: "100%",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    button: {
        variant: "outline-light"
    },
    text: {
        textAlign:'center',
        color: "#E8E8E8",
    }
}