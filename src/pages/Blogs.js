import React from "react";
import { useState } from "react";
import UseMemo from "./UseMemo";

function Blogs() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDelete = () => {
    setCount(0);
  };
  console.log('count');
  return (
    <div>
      <UseMemo />
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Blogs;
