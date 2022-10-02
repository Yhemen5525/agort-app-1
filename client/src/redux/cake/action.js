/** @format */

import { BUY_CAKE } from "./cakeType";

export const buyCake = () => {
  return function (dispatch) {
    dispatch({
      type: BUY_CAKE,
    });
  };
};
