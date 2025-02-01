"use client";

import React, { useReducer } from "react";
import { Button } from "../elements/Button";
import { useRouter } from "next/navigation";
import { reducer } from "../../lib/reducer/Reducer";
import { initialState } from "../../lib/reducer/State";
import { increase, decrease } from "../../lib/reducer/Actions";
import { showSuccess, showError } from "../../utils/constants/Toast";
import { Messages } from "../../utils/constants/Messages";
import { ToastContainer } from "react-toastify";

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const handleNavigate = () => {
    if (state.userNumber === state.targetNumber) {
      showSuccess(Messages.success.redirecting);
      setTimeout(() => {
        router.push("/pages/cv");
      }, 2000);
    } else {
      showError(Messages.error.mismatch);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">Target Number: {state.targetNumber}</h1>
      <h2 className="text-sl">Your Number: {state.userNumber}</h2>

      <div className="flex space-x-4">
        <Button onClick={() => dispatch(decrease())} title="-" />
        <Button onClick={() => dispatch(increase())} title="+" />
      </div>
      <Button onClick={handleNavigate} title="View My CV" />
      <ToastContainer />
    </div>
  );
}
