import React from 'react';
import '../css/Header.css'
import '../css/style.css'

const styles ={
    header: {
        background: 'green'
    },
}

function Header() {

    return (
    <header className="header" style={styles.header}>
        <h1 className='headerName'>Janelle Cikanek</h1>
    </header>
    );
}

export default Header;