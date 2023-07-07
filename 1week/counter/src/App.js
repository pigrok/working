// answer

// import "./App.css";
// import { useState } from "react";

// function App() {
//   // 렌더링이 일어나기 위해 state가 변해야함
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <div>
//         {count}
//         <br />
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           증가 +
//         </button>
//         <button
//           onClick={() => {
//             setCount(count - 1);
//           }}
//         >
//           감소 -
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// 강의 답안
import "./App.css";
import { useState } from "react";

function App() {
  // 렌더링이 일어나기 위해 state가 변해야함
  const [count, setCount] = useState(0);
  const plusButtonClickHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  };

  return (
    <div>
      <div>
        {count}
        <br />
        <button
          onClick={() => {
            // 1번 화살표 함수를 통해 state 변화를 줌.
            // count = count -1; // 절대 안됨. => 반영되지 않음
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          // 함수를 만들어서 state 변화를 줌.
          onClick={plusButtonClickHandler}
          // plusButtonClickHandler () 함수명 끝에 ()를 하게되면 무조건 실행되기 때문에 넣지 않기!
          // 넣어야 한다면 화살표 함수로 감싸줘야함
          // => onClick={()=>plusButtonClickHandler()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
