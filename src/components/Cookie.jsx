import { useState } from "react";

export const Cookie = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>You have {count} points </h1>

      <button onClick={() => setCount((count) => count + 1)}>
        <img src="public\cookie-1.png" className="logo" />
      </button>

      <h1 className="read-the-docs"> This is stupid</h1>
    </>
  );
};
