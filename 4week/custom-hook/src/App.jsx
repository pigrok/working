import "./App.css";
// import { useState } from "react";
import useInput from "./hooks/useInput";

function App() {
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="pasword" value={password} onChange={onChangePasswordHandler} />
    </div>
  );
}

export default App;
