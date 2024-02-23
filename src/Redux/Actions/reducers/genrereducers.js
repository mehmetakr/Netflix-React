import { ActionsTypes } from "./actionsTypses";

const initialstate = {
  genre: [],
  isloading: false,
  iseror: false,
};

const genresreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_GENRES_LOADİNG:
      return { ...state, isloading: true };

    case ActionsTypes.SET_GENRES_ERROR:
      return { ...state, isloading: false, iseror: payload };

    case ActionsTypes.SET_GENRES:
      return { ...state, isloading: false, iseror: false,  genres:payload };

    default:
      return state;
  }
};
export default genresreducer;
