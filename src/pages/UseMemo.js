import React, { useState, useEffect } from "react";
function UseMemo({ getData }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("Child Component -useEffect - getData");

    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);
  return (
    <>
      <div>
        <p>Child Component</p>
        <p>{JSON.stringify(comments)}</p>
      </div>
    </>
  );
}

export default UseMemo;
