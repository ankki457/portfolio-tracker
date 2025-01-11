import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Portfolio Tracker</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Dashboard</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;