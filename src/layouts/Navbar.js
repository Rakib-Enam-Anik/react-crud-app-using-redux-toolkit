import React from "react";
import { Link } from "react-router-dom";

const  Navbar = () => {
  return (
    <nav>
        <link to="/" className="nav-link">
            Home
        </link>
        <Link to="/show-books" className="nav-link">
           Show Books
        </Link>
        <Link to="/add-book" className="nav-link">
           Add Book
        </Link>
    </nav>
  );
};

export default Navbar;
