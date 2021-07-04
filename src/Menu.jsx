import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active_class">Home</NavLink>
        <NavLink exact to="/count" activeClassName="active_class">Count</NavLink>
        <NavLink exact to="/search" activeClassName="active_class">Search</NavLink>
        <NavLink exact to="/keep" activeClassName="active_class">Keep</NavLink>
        <NavLink exact to="/pokemon/1"
          activeClassName="active_class">pokemon</NavLink>
      </div>
    </>
    )
};

export default Menu;