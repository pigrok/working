import useInput from "../api/useInput";
import { useDispatch } from "react-redux";
import { login } from "../reudx/modules/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, onChangeEmailHandelr] = useInput();
  const [password, onChangePasswordHandelr] = useInput();

  // 관심사 분리
  const loginHandler = () => {
    // 로그인 완료
    alert("로그인 되었습니다.");
    dispatch(
      login({
        email,
        password,
      })
    );
    // 페이지 이동
    navigate("/");
  };

  // 구조 뼈대를 보여주는 영역
  return (
    <div>
      <h1>Login Page</h1>
      <input value={email} onChange={onChangeEmailHandelr} placeholder="Enter Email" />
      <input value={password} onChange={onChangePasswordHandelr} placeholder="Enter Password" />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Login;
