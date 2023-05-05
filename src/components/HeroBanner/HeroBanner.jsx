import React, { useEffect, useState } from "react";
import "./styles.css";
import Wrapper from "../Wrapper/Wrapper";

const HeroBanner = ({ data }) => {
  const [backgorund, setBackground] = useState("");

  useEffect(() => {
    const bg = data
      ? data?.[Math.floor(Math.random() * 9)].show?.image?.original
      : "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg";

    setBackground(bg);
  }, [data]);

  return (
    <Wrapper>
      <div className="heroBanner">
        <img src={backgorund} alt="hero-image" />

        <div className="heroText">
          <h2>Welcome.</h2>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>

          <div className="searchInput">
            <input type="text" placeholder="Search for a movie or tv show..." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBanner;
