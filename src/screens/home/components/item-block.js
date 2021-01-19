import React from 'react';

export const ItemBlock = (props) => {
    const { title, info } = props;
    if (props.children) {
        return (
            <div style={{ marginTop: 5, marginBottom:5 }}>
                {props.children}
            </div>
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