import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={function () {
          // alert("잘 눌러져요!");
          const newCount = count - 1;
          setCount(newCount);
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          // alert("잘 눌러져요!");
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        증가
      </button>
    </div>
  );
}

export default App;
