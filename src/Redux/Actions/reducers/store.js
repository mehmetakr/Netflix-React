import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk'; 
// Doğru şekilde redux-thunk import ediliyor.
import moviereducer from "./moviereducers";
import genresreducer from "./genrereducers";

// Applymiddleware asenkron işlemler yapabilmemizi sağlar...Redux store artık asenkron eylemler yönetebilir..
const rootreducer = combineReducers({
  movie: moviereducer,
  genre : genresreducer,
  
});

export default createStore(rootreducer, applyMiddleware(thunk));
