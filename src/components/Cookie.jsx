import { useState } from "react";
import cookie from "../assets/cookie-1.png";

export const Cookie = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>You have {count} points </h1>

      <button onClick={() => setCount((count) => count + 1)}>
        <img src={cookie} className="logo" />
      </button>

      <h1 className="read-the-docs"> This is beautiful</h1>
    </>
  );
};
