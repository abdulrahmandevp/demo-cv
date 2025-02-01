
// "use client"; // Ensures this component is purely client-side

// import React, { useReducer, useEffect, useState } from "react";
// import { Button } from "../components/Button";
// import { reducer } from "../reducers/appReducer";
// import { useRouter } from "next/navigation";

// export function Counter() {
//   const [state, dispatch] = useReducer(reducer, { userNumber: 0, targetNumber: 0, message: "" });
//   const [initialized, setInitialized] = useState(false);
//   const router = useRouter();

//   // Generate targetNumber only on the client to avoid hydration errors
//   useEffect(() => {
//     dispatch({ type: "reset" });
//     setInitialized(true);
//   }, []);

//   const handleNavigate = () => {
//     if (state.userNumber === state.targetNumber) {
//       router.push("/pages/cv");
//     } else {
//       alert("Try again!");
//     }
//   };

//   if (!initialized) return null; // Prevents rendering mismatched server HTML

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
//       <h1 className="text-3xl font-bold">Target Number: {state.targetNumber}</h1>
//       <h2 className="text-2xl">Your Number: {state.userNumber}</h2>

//       <div className="flex space-x-4">
//         <Button onClick={() => dispatch({ type: "decrease" })}>-</Button>
//         <Button onClick={() => dispatch({ type: "increase" })}>+</Button>
//       </div>

//       <Button onClick={handleNavigate}>View My CV</Button>
//     </div>
//   );
// }

"use client";

import React, { useReducer, useEffect } from "react";
import { Button } from "../components/Button";
import { useRouter } from "next/navigation";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, userNumber: state.userNumber + 1 };
    case "decrease":
      return { ...state, userNumber: state.userNumber - 1 };
    case "reset":
      return { ...state, targetNumber: Math.floor(Math.random() * 10) };
    default:
      return state;
  }
};

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { userNumber: 0, targetNumber: 0 });
  const router = useRouter();

  // Ensure targetNumber is only updated on mount
  useEffect(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleNavigate = () => {
    if (state.userNumber === state.targetNumber) {
      router.push("/pages/cv");
    } else {
      alert("Ooops... Number Mismatched, Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">Target Number: {state.targetNumber}</h1>
      <h2 className="text-sl">Your Number: {state.userNumber}</h2>

      <div className="flex space-x-4">
        <Button onClick={() => dispatch({ type: "decrease" })}>-</Button>
        <Button onClick={() => dispatch({ type: "increase" })}>+</Button>
      </div>

      <Button onClick={handleNavigate} title='View My CV'/>
    </div>
  );
}
