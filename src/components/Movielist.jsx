import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseIMGURL, options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Movielist = ({ genre }) => {
  const [movies, setmovies] = useState([]);

  console.log(genre);
  // useeffect ile verileri apiden çektik ve kategorilere ait olan verileri id sine göre aldık.
  // Kategoriye ait olan film verileri çekildi
  //Bunları slider içerisine listele

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setmovies(res.data.results));
  }, []);

  return (
    <div className="gap-5 mx-2 p-4">
      <h1 className="p-3 btn btn-danger cursor:pointer fs-4">{genre.name}</h1>

      <Splide
        options={{
          rewind: true,
          gap: "10px",
          autoWidth: true,
          pagination: false,
          autoplay: true,
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie}>
            <Link to={`/detay/${movie.id}`}>
            <img
              className="movie"
              src={baseIMGURL + movie.poster_path}
              alt=""
            />
            </Link>
          </SplideSlide>
          
        ))}
      </Splide>
    </div>
  );
};

export default Movielist;
