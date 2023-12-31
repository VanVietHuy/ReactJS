import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/usememo">UseMemo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;