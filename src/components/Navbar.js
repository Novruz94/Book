import React, { useState } from 'react';
import "../navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Image1 from '../images/thum10.webp';
import Image2 from '../images/thum10.webp';
import Image3 from '../images/thum2 (1).webp';
import Image4 from '../images/thum2.webp';
import Image5 from '../images/thum3 (1).webp';
import Image6 from '../images/thum3.webp';
import Image7 from '../images/thum4.webp';
import Image8 from '../images/thum5.webp';
import Image9 from '../images/thum6.webp';
import Image10 from '../images/thum7.webp';
import { FaTh } from "react-icons/fa";


function Navbar() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");

    };

    

    return (
      <>
      <nav className="nav">
            <a href="/" className="nav__brand">
                Navbar
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/shop" className="nav__link">
                        Shop
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/blog" className="nav__link">
                        Blog
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/contact" className="nav__link">
                        Contact
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        
        <nav className="nav2">

        
         
        <Dropdown className="d-inline mx-1 " autoClose="inside" >
          <Dropdown.Toggle  id="dropdown-autoclose-inside" >
          <i className='icon'> <FaTh/> </i>  Categories
          </Dropdown.Toggle>

        <Dropdown.Menu  className='dmenu'>
          <Dropdown.Item  href="/"> <img alt="" src={Image1}/> Action & Adventure</Dropdown.Item>
          <Dropdown.Divider className='ddivider' />
          <Dropdown.Item  href="/"> <img alt="" src={Image2}/> Americas</Dropdown.Item>
          <Dropdown.Divider className='ddivider' />
          <Dropdown.Item  href="/"> <img alt="" src={Image3}/>Arts & Photography</Dropdown.Item>
          <Dropdown.Divider  className='ddivider'/>
          <Dropdown.Item  href="/"> <img alt="" src={Image4}/>Biographies</Dropdown.Item>
          <Dropdown.Divider className='ddivider' />
          <Dropdown.Item  href="/"> <img alt="" src={Image5}/>Children's Books</Dropdown.Item>
          <Dropdown.Divider  className='ddivider'/>
          <Dropdown.Item  href="/"> <img alt="" src={Image6}/>Classics</Dropdown.Item>
          <Dropdown.Divider  className='ddivider'/>
          <Dropdown.Item  href="/"> <img alt="" src={Image7}/>Contemporary</Dropdown.Item>
          <Dropdown.Divider  className='ddivider'/>
          <Dropdown.Item  href="/"> <img alt="" src={Image8}/>Education & Reference</Dropdown.Item>
          <Dropdown.Divider className='ddivider' />
          <Dropdown.Item  href="/"> <img alt="" src={Image9}/>Genre Fiction</Dropdown.Item>
          <Dropdown.Divider  className='ddivider' />
          <Dropdown.Item  href="/"> <img alt="" src={Image10}/>Historical</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

         <div className="search-box">
          <input className='search-txt' type="text" placeholder='Search products...' />
          <a className='search-btn' href="/">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </a>
         </div>

         <button className='btn1'>Share post</button> 

        </nav>
        </>
    );
  }

export default Navbar
