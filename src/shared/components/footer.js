import React from 'react';

export const Footer = () => {
    return (
        <div className="justify-content-md-center" style={{ borderTopStyle: 'solid', borderTopWidth: 1, marginRight: 10, marginLeft: 10, marginTop: 10, padding: 10 }}>
            <p style={{textAlign:'center'}}>
                <a href="https://github.com/smeglan/curriculum">See on github.</a>
                <br></br>
                Last update 13/04/2021.
            </p>
        </div>
    )
}