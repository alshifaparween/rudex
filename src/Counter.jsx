import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increament } from "./action/Action";

function Counter() {
  const data = useSelector((state) => state.IncreamentAndDecreament);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1>Count {data}</h1>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(Increament())}
      >
        Increament
      </button>
      <button className="btn btn-danger ms-2"> Decreament</button>
    </div>
  );
}

export default Counter;
