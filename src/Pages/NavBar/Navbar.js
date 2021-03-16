import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import "./navbar.scss"

//parent compoent that holds the Navbar
const NavBar = () => {
  return (
    <div className="home-header">
      <NavLink
        /*  className="navbar__link"
          activeClassName="navbar__link--active" */
        to="/"
      >
        <Button>
          <Typography variant="h4">
            DK
          </Typography>
        </Button>
      </NavLink>
      <div className="NavButtonsGroup flex-end">
        <NavLink
          /*  className="navbar__link"
          activeClassName="navbar__link--active" */
          to="/Projects"
        >
          <Button>Projects</Button>
        </NavLink>
        <NavLink
          /*  className="navbar__link"
          activeClassName="navbar__link--active" */
          to="/About"
        >
          <Button>About</Button>
        </NavLink>
        <NavLink
          /*  className="navbar__link"
          activeClassName="navbar__link--active" */
          to="/Contact"
        >
          <Button>Contact</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
