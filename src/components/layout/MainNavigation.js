import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
            >
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-meetup"
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
            >
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
            >
              My Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
