import type { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
  const [value, setValue] = useState(0);
  const plusValue = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h2>useCallback</h2>
      <button>-</button>
      <span>{value}</span>
      <button onClick={plusValue}>+</button>
    </div>
  );
};

export default Page;
