import React from 'react';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>
                CaldAR
            </h1>
        </header>
    );
}

const headerStyle = {
    background: '#094455',
    textAlign: 'center',
    padding: '5px',
    margin: '10px 0'
}

const h1Style = {
    fontSize: '42px',
    color: '#ffffff',
    textAlign: 'center'
}