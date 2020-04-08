import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link exact="true" to="/">
        Home
      </Link>

      <Link to="/comp-one">
        Comp One
      </Link>

      <Link to="/comp-two">
        Comp Two
      </Link>

    </div>
  );
}

export default NavBar;
