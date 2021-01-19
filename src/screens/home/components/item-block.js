import React from 'react';

export const ItemBlock = (props) => {
    const { title, info, location } = props;
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
                <div style={{ marginBottom: 10, width:'100%' }}>
                    <label style={{ fontWeight: 'bold' }}>{title}</label>
                    <label style={{ alignSelf: 'flex-end' }}>{location}</label>
                    <br></br>
                    <label>{info}</label>
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

}