import { useCallback, useState } from "react";
import UseMemo from "./UseMemo";

function Blogs() {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  },[])
  const handleClick = () => {
    getData('users')
    .then(res => res.json())
    .then(res => {
      const users = res.data;
      setUsers(users);
    })
  }
  return ( 
    <>
      {/* <p>Data:</p> */}
      <button onClick={handleClick}>Get Users Data</button>
       <p>{JSON.stringify(users)}</p> {/* convert method thành string */}
      <UseMemo getData={getData} />
    </>
  );
}

export default Blogs;
