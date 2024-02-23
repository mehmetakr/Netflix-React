import { ActionsTypes } from "./actionsTypses";

const initialstate = {
  popularmovies: [],
  isloading: false,
  iserror: false,
};

// Burada  reducerımız 2 parametre alır.Birisi initialstate (yani başlangiç değeri ) diğeri ise dispatch işlemının olacagı type ve payload parametrelerinin dönucegi diğer bir paramtre .
const moviereducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_MOVİES_LOADİNG:
      return {
        ...state,
        isloading: true,
      };

    case ActionsTypes.SET_MOVİES_ERROR:
      return { ...state, isloading: false, iserror: payload };

    case ActionsTypes.SET_MOVİES:
      return { ...state, isloading: false, iserror: false, popularmovies: payload };
    
      default:
      return state;
      
  }
};

export default moviereducer;
