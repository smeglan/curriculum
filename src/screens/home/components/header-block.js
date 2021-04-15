import React from 'react';

export const HeaderBlock = (props) => {
    const { title, subtitle, variant = "" } = props;
    const style = variant === "light" ? styleLight : styleDark
    return (
        <div style={style.container}>
            <h3 style={style.text}>{title}</h3>
            <p className="text-nowrap" style={ style.text }>{subtitle}</p>
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
        width: "90%",
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%'
    },
    button: {
        variant: "outline-dark"
    },
    text: {
        fontSize: "1rem",
        color: "black"
    },
}

const styleLight = {
    container: {
        marginTop: 30,
        marginBottom: 30,
        height: 100,
        width: "90%",
        justifyContent: 'center',
        padding: 10,
        marginLeft: '5%',
        marginRight: '5%'
    },
    button: {
        variant: "outline-light"
    },
    text: {
        textAlign: 'center',
        color: "#E8E8E8",
    }
}