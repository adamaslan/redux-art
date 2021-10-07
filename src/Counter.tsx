import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "./hooks";

import { decrement, increment } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();
  console.log(count);
  return (
    <div>
      {" "}
      <button onClick={() => dispatch(increment())}>INCREMENT </button>
    </div>
  );
  // omit rendering logic
}
