import React from "react";
import "./styles.css";
import Wrapper from "../Wrapper/Wrapper";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Wrapper>
        <h1 onClick={() => navigate("/")}>QuadB</h1>

        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch size={22} />
          </li>
        </ul>
      </Wrapper>
    </header>
  );
};

export default Header;
