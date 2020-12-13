import React from 'react';

export default function Title() {
    return (
        <div style={titleStyle}>
            Buildings
        </div>
    );
}

const titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#094455',
    textDecoration: 'underline', 
    textAlign: 'center',
    marginBottom: '20px' 
}