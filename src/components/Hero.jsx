import React from "react";
import { useSelector } from "react-redux";
import store from "../Redux/Actions/reducers/store";
import Loading from "./Loading";
import { baseIMGURL } from "../constant";
const Hero = () => {
  //Redux store ile useselector kullanarak store dan bir parca aldık ve  state e döndürüyoruz...
  const state = useSelector((store) => store.movie);

  console.log(state);

  //Popüler filmlerden rastgele bir tanesini secicez..

  // 0 - 20 arasında rastgele bir sayı üret..
  const i = Math.round(Math.random() * state.popularmovies.length);

  // rastgele ürettiğimiz sıradaki filme erişmek.

  const film = state.popularmovies[i];

  console.log(film);
  return (
    <div className="hero row p-4">
      {/* yüklenme işlemı devam edıyorsa */}

      {!film ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center  text-white">
            <h1> {film.title}</h1>
            <p className="text-start">{film.overview}</p>

            <p>
              <span className="text-danger"> İMDB : </span>
              <span className="text-warning px-2"> {film.vote_average}</span>
            </p>
            <div className="d-flex mx-4 gap-3 my-3">
              <button className="btn btn-danger">Filmi izle </button>
              <button className="btn btn-primary">Listeye Ekle</button>
            </div>
          </div>
          <div className="col-md-6 justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow my-4"
              style={{ height: "700px" }}
              src={baseIMGURL + film.poster_path}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
