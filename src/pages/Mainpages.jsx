import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getgender, getpopular } from "../Redux/Actions/reducers/movieaction";
import Hero from "../components/Hero";
import Movielist from "../components/Movielist";

const Mainpages = () => {
  //Apiden rastgele  20 veri cekıcez ve rastgele 1 tanesini ekrana basıcaz
  //.Ardınan store akatarıcaz.  (Bu işlem için redux thunk kullanmamız lazım , yani asenkron fonksiyon .)

  // mainpagede kategorileri abone etmemız lazım kullanabilmemiz için
  //   onun içinde store a abone olmamız lazım ...

  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpopular());
    dispatch(getgender());
  }, []);
  return (
    <div>
      <Hero />

      {/*  
1 ) Yüklenme işlemi bittiyse devam ediyorsa loader bas
2 ) Yükleme bittiysee ama hata varsa hatayı ekrana bas 
3 ) Yükleme bittiyse ve hatada yoksa kategorileri ekrana bas.

*/}

{state.isLoading ? (
        <div class="spinner-border text-primary" role="status"></div>
      ) : state.isError ? (
        <p>Üzgünüz bir hata oluştu {state.isError}</p>
      ) : (
          state.genres && state.genres.map((genre) => (
          <Movielist key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};
export default Mainpages;
