import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import soaphead from "../images/soaphead.png"

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <img src={soaphead} alt="website logo"/>
        <ul>
          <li>
            <Link activeClassName={"active"} to="/">
              home
            </Link>
          </li>
          <li>
            <Link activeClassName={"active"} to="/about">
              about
            </Link>
          </li>
          <li>
          <Link activeClassName={"active"} to="/archive">
              archive
            </Link>
          </li>
          <li>
            <Link activeClassName={"active"} to="/submissions">
              submit
            </Link>
          </li>
          <li>
            <Link activeClassName={"active"} to="/contact">
              contact
            </Link>
          </li>
          <li>
          <Link activeClassName={"active"} to="/masthead">
              masthead
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.header`
  height: 3rem;
  width: 100%;
  background: #EDF4FE;
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 5rem;
  margin-top: 5rem;
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  display: flex;
  padding: 0;
  border: none;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: none;
  z-index: 11;
  position: ${({ menuOpen }) => (menuOpen ? "fixed" : "sticky")};
  div {
    width: 2rem;
    height: 0.3rem;
    background: ${({ menuOpen }) => (menuOpen ? "#524A35" : "#524A35")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #8ddfd6; 
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  position: fixed;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  svg {
    padding-bottom: 1.5rem;
  }
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};
  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    li {
      text-align: center;
      list-style: none;
      width: 100%;
      a {
        display: inline-block;
        font-size: 0.9rem;
        text-decoration: none;
        color: #373737;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border-radius: 1rem;
        padding: 0.3rem;
        font-weight: bold;
      }
      a:hover {
        background-color: #c293f5;
        color: #8f8f8f;
        transition-duration: 0.5s;
      }
    }
    .active {
      background-color: #c293f5;
    }
  }
`