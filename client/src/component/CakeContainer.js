/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/index";

function CakeContainer() {
  const dispatch = useDispatch();

  // dispatch(buyCake());

  let cakes = "";
  useSelector((state) => {
    console.log("from cake container" + state.numOfCakes);
    cakes = state.numOfCakes;
  });
  return <div>numOfCakes are : {cakes} </div>;
}

export default CakeContainer;
