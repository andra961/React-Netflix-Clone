import React from "react";

import HeaderOption from "./HeaderOption";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Header.css";

function Header({ isScrolled }) {
  return (
    <div className={isScrolled ? "header blackBackground" : "header"}>
      <div className="headerLeft">
        <HeaderOption Icon={MenuIcon} />
        <img
          id="logo"
          src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
        ></img>
      </div>

      <div className="headerRight">
        <HeaderOption Icon={SearchIcon} />
        <HeaderOption Icon={MoreHorizIcon} />
      </div>
    </div>
  );
}

export default Header;
