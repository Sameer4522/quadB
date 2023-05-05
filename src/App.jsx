import HeroBanner from "./components/HeroBanner/HeroBanner";
import Header from "./components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Trending from "./components/Trending/Trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

const App = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setData(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage data={data.data} />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
