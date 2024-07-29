import React from "react";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.wrapper}>
      <nav>
        <ul className={s.nav}>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
