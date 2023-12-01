import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "XOA_ALL":
      return 0;
    default:
      return state;
  }
};
const reducer2 = (state, action) => {
  switch (action.type) {
    case "ADD":
      return action.data;
    default:
      return state;
  }
};
const initState = {
  loading: false,
  data: [],
  error: null,
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return { ...state, loading: true };
    case "GET_USER_SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "POST_USER_ERROR":
      return { ...state, data: [], error: action.data };
    default:
}}

function Home() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUsers = () => {
    userDispatch({ type: "GET_USER_REQUEST" });
    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({ type: "GET_USER_SUCCESS", data: res });
        })
        .catch((err) => {
          userDispatch({ type: "GET_USER_ERROR", data: err });
        });
    }, 2000);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          dispatch("GIAM");
        }}
      >
        Giảm
      </button>
      <button
        onClick={() => {
          dispatch("TANG");
        }}
      >
        Tăng
      </button>
      <button
        onClick={() => {
          dispatch("XOA_ALL");
        }}
      >
        Xóa Hết Dữ Liệu
      </button>
      <p>Count 2: {count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "ADD",
            data: 20,
          })
        }
      >
        Add
      </button>
      <button onClick={getUsers}>GET USER</button>
    {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
    </>
  );
}

export default Home;
