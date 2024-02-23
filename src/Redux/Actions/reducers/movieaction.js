//Thunk aksiyonu yazıcaz önce aksıyo oluturucaz
//Popüler filmleri getir ve store a aktar

import axios from "axios";
import { options } from "../../../constant";
import { ActionsTypes } from "./actionsTypses";
//Bu kısımı heryerde kullanıcagımız için baseURL olarak tanımladık..
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getpopular = () => (dispatch) => {
  // Aşama aşama izlediği yolu store a aktarıyoruz.
  // Önce yüklenme işlemı var o oluyo (aksiyon tanımlaması sonucu )
  // Ardından veriler geldikten sonra gelen verileri ekrana yazdırdık. 20 değer döndü.

  // Dönen değer hata dönderiyormu onuda kontrol ettik ekrana yazddırdık ve store a aktardık

  //Reducera yüklendiğini haber ver..
  dispatch({
    type: ActionsTypes.SET_MOVİES_LOADİNG,
  });

  axios
    .get("/movie/popular", options)
    .then((res) =>
      dispatch({
        //Reducera haber ver
        type: ActionsTypes.SET_MOVİES,
        payload: res.data.results,
      })
    )
    .catch((error) => {
      dispatch({
        type: ActionsTypes.SET_MOVİES_ERROR,
        payload: error.message,
      });
    });
};

// Kategoriler al ve store a aktar (yani yeni bir asenkron aksiyon yazıcaz )

export const getgender = () => (dispatch) => {
  dispatch({
    type: ActionsTypes.SET_GENRES_LOADİNG,
  });

  axios
    .get('/genre/movie/list?language=tr', options)
    .then((res) =>
      dispatch({
        type: ActionsTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((error) =>
      dispatch({
         type: ActionsTypes.SET_GENRES_ERROR,
          payload: error.message })
    );
};
