import React from 'react';
import Header from './Header';
import './css/Header.css';
import './css/style.css'

function Nav({ currentPage, handlePageChange }) {
return (
 
      <div className="headerNav-container"> 
      <Header/>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://onedrive.live.com/?authkey=%21AMEfJ9OiElxlvJw&cid=69DF60873F88E236&id=69DF60873F88E236%211851&parId=69DF60873F88E236%211808&o=OneUp"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >
            Resume
          </a>
        </li>
      </ul>
      </div>
    );
  }

export default Nav;