import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  return (
    <>
    <nav>
        <div className='nav-links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/interest">About</NavLink>
            <NavLink to="/mywork">My work</NavLink>
            <a href="/#contect">Contect Me</a>
        </div>
            <NavLink className="main-btn" to="/Source">Source codes</NavLink>
    </nav>
    </>
  )
}

export default Header