import i18next from 'i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="NavbarItems" id="apiCoatMenu">
        <Link to='/' className='NavbarMenuItemLogo navbar-logo' onClick={closeMobileMenu}>
          APICOAT
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/solutions' className='nav-links size1' onClick={closeMobileMenu}>
              {t("Solutions.0")}
            </Link>
          </li>
          <li
          
          >
            <div className="dropdown">
            <NavLink to='/products' className="nav-links size1">
              {t("Products.0")} <i class="fas fa-caret-down"></i>
            </NavLink>

            <div class="dropdown-content">
              <NavLink to='/product1'>
              {t("Products1.0")}
              </NavLink>
              <NavLink to='/product2'>
              {t("Products2.0")}
              </NavLink>
              <NavLink to='/product3'>
              {t("Products3.0")}
              </NavLink>
              <NavLink to='/product4'>
              {t("Products4.0")}
              </NavLink>
            </div>
          </div>
          </li>
          <li>
            <Link
              to='/technology'
              className='nav-links size1'
              onClick={closeMobileMenu}
            >
              {t("Technology.0")}
            </Link>
          </li>
          <li>
            <Link
              to='/resources'
              className='nav-links size1'
              onClick={closeMobileMenu}
            >
              {t("Resources.0")}
            </Link>
          </li>
          <li>
            <Link
              to='/company'
              className='nav-links size1'
              onClick={closeMobileMenu}
            >
              {t("Company.0")}
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='nav-links loginButton size2'
              onClick={closeMobileMenu}
            >
              {t("Login.0")}
            </Link>
          </li>
          <li>
            <Link
              to='/demo'
              className='nav-links demoButton size3'
              onClick={closeMobileMenu}
            >
              {t("Demo.0")}
            </Link>
          </li>
          <li>
            <Link
              to='/demo'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              {t("Demo.0")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
