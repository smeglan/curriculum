import React from 'react';

export const HeaderBlock = (props) => {
    const { title, subtitle } = props;
    return (
        <div style={styles.container}>
            <h3 style={styles.text}>{title}</h3>
            <p style={styles.text}>{subtitle}</p>
        </div>
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
        marginLeft: 240,
        marginTop: 60,
        backgroundColor: '#404040',
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
}