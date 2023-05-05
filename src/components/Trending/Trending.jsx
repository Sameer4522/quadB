import React from "react";
import "./styles.css";
import Wrapper from "../Wrapper/Wrapper";
import CircleRating from "../CircleRating/CircleRating";
import dayjs from "dayjs";
import NoPoster from "../../assets/no-poster.png";
import { useNavigate } from "react-router-dom";

const Trending = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="trending">
        <h3>Trending Today</h3>

        <div className="movie-cards">
          {data?.map((item, index) => (
            <div
              key={index}
              className="movieCard"
              onClick={() => navigate(`/${item?.show?.externals?.thetvdb}`)}
            >
              <div className="posterBlock">
                <img
                  className="posterImg"
                  src={
                    item?.show?.image?.medium
                      ? item?.show?.image?.medium
                      : NoPoster
                  }
                />

                {item?.show?.rating?.average && (
                  <CircleRating rating={item?.show?.rating?.average} />
                )}
              </div>

              <div className="textBlock" key={index}>
                <span className="title">{item?.show?.name}</span>
                <span className="date">
                  {item?.show?.premiered
                    ? dayjs(item?.show?.premiered).format("MMM D, YYYY")
                    : "Date not available"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Trending;
