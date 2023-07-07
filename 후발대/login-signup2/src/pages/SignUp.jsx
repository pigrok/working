import React from "react";
import useInput from "../api/useInput";
import { signup } from "../reudx/modules/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onChangeEmailHandelr] = useInput();
  const [password, onChangePasswordHandelr] = useInput();
  const [confirmPassword, onChangeConfirmPasswordHandler] = useInput();
  const [name, onChangeNameHandler] = useInput();

  const signUpHandler = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 다릅니다. 확인해주세요!");
      return false;
    }

    dispatch(
      signup({
        email,
        password,
        name,
      })
    );
    alert("회원가입 완료!");
    navigate("/");
  };
  return (
    <div>
      <h1>SignUp Page</h1>
      <input value={email} onChange={onChangeEmailHandelr} placeholder="Enter Email" />
      <input value={password} onChange={onChangePasswordHandelr} placeholder="Enter Password" />
      <input value={confirmPassword} onChange={onChangeConfirmPasswordHandler} placeholder="Enter CofirmPassword" />
      <input value={name} onChange={onChangeNameHandler} placeholder="Enter Name" />
      <button onClick={signUpHandler}>SignUp</button>
    </div>
  );
}

export default SignUp;
