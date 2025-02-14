import { useEffect, useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUser, isLoggedIn } from '../auth/auth';
const CustomNavbar=()=>{
  const navigate=useNavigate();
  const [isOpen,setIsOpen]=useState(false)

  const [login,setLogin]=useState(false)
  const [user,setUser]=useState(null)

  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUser())
  },[login])

  const logout=()=>{
    doLogout(()=>{
      navigate('/')
    })
  }
  return(
    <div>
      <Navbar color='dark' expand="md" dark='true' className='px-5' >
        <NavbarBrand tag={ReactLink} to="/" >MyBlog</NavbarBrand>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to='/feed'>Feeds</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to='/service'>Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to='/about'>Contact Us</DropdownItem>
                <DropdownItem tag={ReactLink} to='/logout'>Facebook</DropdownItem>
                <DropdownItem tag={ReactLink} to='/logout'>LinkedIn</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {
              login &&(
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to={`/user/profile/${user.id}`}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to='/user/dashboard'>
                    {user.email}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
              )
            }
            {
              !login &&(
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    SignUp
                  </NavLink>
                </NavItem>
              </>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default CustomNavbar;