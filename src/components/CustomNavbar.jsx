import { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';
const CustomNavbar=()=>{
  const [isOpen,setIsOpen]=useState(false)
  return(
    <div>
      <Navbar color='dark' expand="md" dark='true'>
        <NavbarBrand tag={ReactLink} to="/" >MyBlog</NavbarBrand>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                SignUp
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to='/about'>About</DropdownItem>
                <DropdownItem tag={ReactLink} to='/logout'>Logout</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText tag={ReactLink} to="https://www.youtube.com" >Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default CustomNavbar;