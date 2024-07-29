import React from "react";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.wrapper}>
      <nav>
        <ul className={s.nav}>
          <li className={s.navItems}>
            <Link className={s.link} to="/">
              Home
            </Link>
          </li>
          <li className={s.navItems}>
            <Link className={s.link} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
