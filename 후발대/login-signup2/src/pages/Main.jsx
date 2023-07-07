import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reudx/modules/userSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => {
    return state.userSlice;
  });

  const boardList = useSelector((state) => {
    return state.boardSlice;
  });

  const loginUser = userList.find((user) => user.isLogin === true);

  const logoutHandler = () => {
    const isConfirmed = window.confirm("로그아웃 하시겠습니까?");
    if (isConfirmed) {
      dispatch(logout(loginUser.id));
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            Write
          </button>
        </div>
        {loginUser && (
          <div>
            {loginUser.userName}님 반갑습니다!
            <button onClick={logoutHandler}>Logout</button>
          </div>
        )}
      </div>
      <div>
        {boardList
          .filter((board) => board.isDeleted === false)
          .map((board) => {
            return (
              <div key={board.id}>
                {board.title}
                {board.contents}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
