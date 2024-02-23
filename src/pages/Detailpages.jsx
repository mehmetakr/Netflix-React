import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseIMGURL, options } from "../constant";
import Loading from "../components/Loading";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Detailpage = () => { 
  // URL den filmin İD sini alıcaz..
  const { id } = useParams();

  // Film verisini apiden alıcaz..
  const [movie, setmovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/movie/${id}?append_to_response=credits%2Cvideos%2CRecommendations%2CReviews&language=tr-TR`,
        options
      )
      .then((res) => setmovies(res.data));
  }, []);

  // Oyuncuların verisini al
  console.log(movie);
  //console.log(movie..logo_path)
  return (
    <div className="row">
      {!movie ? (
        <Loading />
      ) : (
        <>
          {/* Üst alan  */}
          <div className="col-12 banner">
            <img
              className="w-100 h-100 object-fit-cover"
              src={baseIMGURL + movie.backdrop_path}
              alt=""
            />

            <div className="banner-bg">
              <span>{movie.title}</span>
            </div>
          </div>

          <div className="container p-4 md-5">
            {/* sol taraf */}
            <div className="col-md-6 mt-4 p-4">
              {/* Şirketler */}
              <h2 className="text-white">Yapimci Şirketler</h2>
              <div className="d-flex  gap-3 m-3 flex-wrap">
                {movie.production_companies.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded d-flex align-items-center p-3"
                  >
                    {item.logo_path ? (
                      <img
                        className="object-fit-contain"
                        width={100}
                        height={50}
                        src={baseIMGURL + item.logo_path}
                      />
                    ) : (
                      <span className="company">{item.name}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Konuşulan Diller */}
              <div className="col-md-6 mt-4 p-4">
                <h2 className="text-white">Konuşulan Diller</h2>

                <div className="d-flex gap-3 m-3 flex-wrap">
                  {movie.spoken_languages.map((item) => (
                    <div
                      key={item.english_name}
                      className="d-flex m-4 align-items-center bg-white flex-wrap text-black p-4 rounded dil"
                    >
                      {item.english_name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Yapımcı Ülkeler */}

              <div className="col-md-6 mt-4 p-4">
                <h2 className=" text-white">Yapımcı Ülkeler</h2>

                <div className="d-flex flex-wrap  gap-3   m-4">
                  {movie.production_countries.map((item) => (
                    <div
                      key={item.name}
                      className=" d-flex  text-black rounded m-3 p-4   align-items-center flex-wrap bg-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 p-4">
              {/*Film  açıklaması  */}

              <div className="col-md-6 mt-4 p-4">
                {!movie.overview ? (
                  <p className="text-black bg-white rounded p-4 ">
                    Filmle ilgili herhangi bir veriye ulaşilamamiştir
                  </p>
                ) : (
                  <p className="lead p-4 rounded bg-white">{movie.overview}</p>
                )}

                <p>
                  <span className="fw-bold text-white fs-3">Gelir : </span>
                  <span className="text-success fs-4">
                    {millify(movie.revenue)} $
                  </span>
                </p>

                <p>
                  <span className="fw-bold text-white fs-3">Bütçe : </span>
                  <span className="text-success fs-4">
                    {millify(movie.budget)} $
                  </span>
                </p>
              </div>
            </div>

            {/* Oyuncuların verisi  */}

            <div className="col-12  my-3">
              <h2 className="text-white">Oyuncular</h2>

              <Splide
                options={{
                  height: "200px",
                  gap: "10px",
                  pagination: false,
                  autoWidth: true,
                }}
              >
                {movie.credits.cast.map((item) => (
                  <SplideSlide key={item.id}>
                    <div className="actor h-100">
                      {!item.profile_path ? (
                        <img
                          className="movie"
                          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                        />
                      ) : (
                        <img
                          className="movie"
                          src={baseIMGURL + item.profile_path}
                        />
                      )}

                      <p>
                        <span>{item.name}</span>
                        <span>{item.character}</span>
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/*  Videolar */}
            <div className="my-5 ">
              <Splide options={{ heigh: "100%", width: "100%" }}>
                {movie.videos.results.map((video) => (
                  <SplideSlide>
                    <iframe
                      width={"100%"}
                      height={"500"}
                      key={video.id}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                    ></iframe>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/*  Yorumlar */}
            <div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detailpage;
