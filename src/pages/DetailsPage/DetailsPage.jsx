import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../components/Wrapper/Wrapper";
import dayjs from "dayjs";
import CircleRating from "../../components/CircleRating/CircleRating";
import { BsFillInfoCircleFill } from "react-icons/bs";
import NoPoster from "../../assets/no-poster.png";
import Form from "../../components/Form/Form";

const DetailsPage = () => {
  const [data, setData] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const { id } = useParams();

  const fetchDataFromId = async () => {
    const response = await axios.get(
      `https://api.tvmaze.com/lookup/shows?thetvdb=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setData(response.data);
  };

  useEffect(() => {
    fetchDataFromId();
  }, []);

  console.log(data);

  let summary = data?.summary
    ? data?.summary?.replace(/(<([^>]+)>)/gi, "")
    : "Oops no data found!";

  return (
    <>
      <div className="backdrop-img">
        <img
          src={data?.image?.original ? data?.image?.original : NoPoster}
          alt=""
        />
      </div>

      <Wrapper>
        <div className="main-div">
          <div className="left-div">
            <img
              src={
                data?.image?.meduim || data?.image?.original
                  ? data?.image?.medium
                  : NoPoster
              }
            />
          </div>

          <div className="right-div">
            <h1>{`${data?.name} (${data?.status})`}</h1>

            <div className="textBox">
              <span className="date">
                {data?.premiered
                  ? dayjs(data?.premiered).format("MMM D, YYYY")
                  : "Date not available"}
              </span>

              {data?.genres && (
                <p>
                  Genres:{" "}
                  <span>
                    {data?.genres[0]}
                    {data?.genres[1] && (
                      <>
                        {", "}
                        {data?.genres[1]}
                      </>
                    )}
                    {data?.genres[2] && (
                      <>
                        {", "}
                        {data?.genres[2]}
                      </>
                    )}
                  </span>
                </p>
              )}

              <p>
                Language: <span>{data?.language}</span>
              </p>
            </div>

            <div className="user-score">
              <CircleRating
                rating={data?.rating?.average ? data?.rating?.average : 0.1}
              />

              <p>User Score</p>

              <a href={data?.url}>
                {" "}
                <BsFillInfoCircleFill /> More Info
              </a>
            </div>

            <div className="overviewDiv">
              <h5>Overview</h5>
              <p>{summary}</p>
            </div>

            {openForm && (
              <>
                <div className="modal" />
                <Form name={data.name} setOpenForm={setOpenForm} />
              </>
            )}

            <button onClick={() => setOpenForm(!openForm)} className="bookBtn">
              Book Ticket
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default DetailsPage;
