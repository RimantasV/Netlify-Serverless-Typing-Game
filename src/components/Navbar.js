import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavItems,
  StyledLinkButton,
  StyledNavBrand
} from "../styled/Navbar";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<span>Type</span>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLinkButton to="/">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/game">Game</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highscores">High Scores</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
