import React from 'react';

export const Block = (props) => {
    const { title } = props;
    return (
        <div>
            <div style={{ borderBottomStyle: 'solid', borderBottomWidth: 1, backgroundColor: '#282E42', padding: 5, borderRadius: 4 }}>
                <h5 style={{ color: 'white' }}>{title}</h5>
            </div>
            <div style={{ padding: 5 }}>
                {props.children}
            </div>
        </div>
    )
}