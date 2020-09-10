import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
        <svg
          preserveAspectRatio="xMidYMid meet"
          id="comp-k4chd1e0svgcontent"
          data-bbox="68.337 37.8 63.375 124.402"
          viewBox="68.337 37.8 63.375 124.402"
          height="20%"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="color"
          role="img"
          aria-labelledby="comp-k4chd1e0-svgtitle"
        >
          <title id="comp-k4chd1e0-svgtitle"></title>
          <g>
            <path
              d="M112.118 66.214V51.907h-4.733v-8.828c2.91-.326 4.899-.728 5.103-.77a1.826 1.826 0 0 0-.74-3.576c-.12.025-12.164 2.467-20.877.03-7.189-2.016-15.311-.824-21.722 3.187a1.827 1.827 0 0 0 1.936 3.097c4.291-2.681 11.481-4.817 18.801-2.767 1.679.47 3.449.776 5.229.966v8.662h-4.737v14.426c-6.165 1.142-19.593 5.662-19.593 23.288v60.404c0 .122.14 12.176 12.18 12.176h36.567c.123 0 3.053-.017 5.993-1.486 2.822-1.411 6.187-4.41 6.187-10.689V89.615c-.003-.213-.293-20.762-19.594-23.401zm-18.089 1.679V55.849h14.437v12.044H94.029zm9.703-13.717h-4.966V44.172h4.966v10.004zM92.43 69.707l1.128-.142h15.183l1.408.11c17.587 1.375 17.904 19.196 17.909 19.945v6.482H74.436V89.62c0-15.935 12.584-19.234 17.994-19.913zm35.628 28.068v40.815H74.436V97.775h53.622zm-8.527 60.773H82.963c-8.224 0-8.521-7.657-8.527-8.523v-9.761h53.622v9.761c0 8.219-7.661 8.516-8.527 8.523z"
              fill="#524A35"
              data-color="1"
            ></path>
          </g>
        </svg>
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
            <Link activeClassName={"active"} to="/masthead">
              masthead
            </Link>
          </li>
          <li>
            <Link activeClassName={"active"} to="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link activeClassName={"active"} to="/issues">
              issues
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
            <Link activeClassName={"active"} to="/archive">
              archive
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
  background: #e8e8e8;
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
        background-color: #e6eaf5;
        color: #8f8f8f;
        transition-duration: 0.5s;
      }
    }
    .active {
      background-color: #d9e075;
    }
  }
`