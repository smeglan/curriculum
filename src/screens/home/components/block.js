import React from 'react';

export const Block = (props) => {
    const { title } = props;
    return (
        <div style={{ padding: 10 }}>
            <div style={{ borderBottomStyle: 'solid', borderBottomWidth: 1 }}>
                <h5>{title}</h5>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}