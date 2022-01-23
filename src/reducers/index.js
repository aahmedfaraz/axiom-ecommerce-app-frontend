import { combineReducers } from "redux";
import buyerReducer from "./buyerReducer";
import sellerReducer from "./sellerReducer";

export default combineReducers({
  buyer: buyerReducer,
  seller: sellerReducer,
});
