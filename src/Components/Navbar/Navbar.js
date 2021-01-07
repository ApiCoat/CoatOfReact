import React, { Component } from 'react';
import { MenuItems } from './MenuItem';
import './Navbar.scss';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    apicoatClick = () => {
        this.setState({ clicked: this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems" id="ApicoatMenu">
                <p className="navbar-logo"><NavLink to="/" className="NavbarMenuItemLogo" onClick={ this.apicoatClick } style={{ fontWeight: '700'}}>APICOAT</NavLink></p>
                
                <div className="menu-icon" onClick={ this.handleClick }>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'} style = {{ marginBottom: '0rem' }} >
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index} onClick={ this.handleClick }><NavLink className={item.cName} to={item.url}>{item.title}</NavLink></li>
                        );
                    })}
                </ul>
                {/* <Button>REQUEST DEMO</Button> */}  
            </nav>
        );
    }
}

export default Navbar;