import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaMagnifyingGlass, FaMoon, FaRegSun } from "react-icons/fa6";
import UseLocalStorage from "../hooks/useLocalStorage";
import { ReceipeContext } from "../context/receipeContext";

export default function NavBar() {
  const [, setTheme] = UseLocalStorage("theme", "dark");
  const { search, setSearch, handleGetReceipes } = useContext(ReceipeContext);

  return (
    <header className="header">
      <nav className="navbar container">
        <h1 className="logo">
          <NavLink to="/">Food Recipe</NavLink>
        </h1>

        <div className="search-bar-container">
          <form className="form search-form">
            <input
              type="type"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              placeholder="Search Recipe"
            />
            <button
              className="btn form-btn"
              type="submit"
              onClick={handleGetReceipes}
            >
              <FaMagnifyingGlass className="search-icon" />
            </button>
          </form>
        </div>

        <div className="nav-right-section">
          <div className="theme-icons">
            <button
              className="btn"
              type="button"
              onClick={() => setTheme("dark")}
            >
              <FaMoon className="moon-icon" />
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setTheme("light")}
            >
              <FaRegSun className="sun-icon" />
            </button>
          </div>
          <ul className="right-menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/favourites"}>Favourites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
