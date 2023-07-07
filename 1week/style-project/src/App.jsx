// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// map 함수를 쓸 때는 key 사용하기

import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  // 추가 버튼
  const clickAddButtonHandler = () => {
    // 1.새로운 형태를 만든다.
    // new : { id: 1, age: 30, name: "송중기" }
    // 2. new를 배열에 더한다.

    const newUser = {
      id: users.length + 1,
      age: age, // key와 value 이름이 같으면 생략하고 age, 만 사용가능
      name, // key와 value 이름이 같으면 생략하고 name, 만 사용가능
    };

    setUsers([...users, newUser]);
    // 불변성을 유지하기 위해서
    // users의 배열을 ...으로 풀고
    // newInfo를 배열에 더함.
  };

  // 삭제 버튼
  const clickRemoveButtonHandler = (id) => {
    // users.filter(user => user.id !== 어떤값 )
    const newUsers = users.filter((user) => user.id !== id);
    // 위와 같은 함수 식
    // const newUsers = users.filter(function(user) {
    //   return user.id !==id;
    // })
    setUsers(newUsers);
  };

  // const users = [
  //   { id: 1, age: 30, name: "송중기" },
  //   { id: 2, age: 24, name: "송강" },
  //   { id: 3, age: 21, name: "김유정" },
  //   { id: 4, age: 29, name: "구교환" },
  // ];

  return (
    <div>
      <div>
        이름 : &nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이 : &nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div className="app-style">
        {users.map(function (item) {
          // 상위 컴포넌트가 가지고 있는 item이라는 값을
          // 하위 컴포넌트로 props의 형태로 내려줌
          return (
            <User
              key={item.id}
              item={item}
              removeFunction={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// map, filter

// import React from "react";
// import "./App.css";

// const App = () => {
//   const testArr = ["감자", "고구마", "오이", "가지", "옥수수"];

//   return (
//     <div className="app-style">
//       {/* filter는 {}안의 배열을 새로 만들어 주기때문에
//       map을 통해 다시 가공함.  */}
//       {testArr
//         .filter(function (item) {
//           return item !== "오이";
//         })
//         .map(function (item) {
//           return <div className="component-style">{item}</div>;
//         })}

//       {/* map 화살표 */}
//       {/* {testArr.map((item) => {
//         return <div className="component-style">{item}</div>;
//       })} */}

//       {/* map */}
//       {/* {testArr.map(function (item) {
//         return <div className="component-style">{item}</div>;
//       })} */}
//     </div>
//   );
// };

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 객체를 className으로 뺴서 App.css에 분리함

// import React from "react";
// import "./App.css";

// const App = () => {
//   // const style = {
//   //   padding: "100px",
//   //   display: "flex",
//   //   gap: "12px",
//   // };

//   // const squareStyle = {
//   //   width: "100px",
//   //   height: "100px",
//   //   border: "1px solid green",
//   //   borderRadius: "10px",
//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // };

//   return (
//     <div className="app-style">
//       <div className="component-style">감자</div>
//       <div className="component-style">고구마</div>
//       <div className="component-style">오이</div>
//       <div className="component-style">가지</div>
//       <div className="component-style">옥수수</div>
//     </div>
//   );
// };

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 강의 답안
// import React from "react";

// const App = () => {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px",
//   };

//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <div style={style}>
//       <div >감자</div>
//       <div >고구마</div>
//       <div >오이</div>
//       <div >가지</div>
//       <div >옥수수</div>
//     </div>
//   );
// };

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 내 답안

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <div class="fruit">감자</div>
//       <div class="fruit">고구마</div>
//       <div class="fruit">오이</div>
//       <div class="fruit">가지</div>
//       <div class="fruit">옥수수</div>
//     </div>
//   );
// }

// export default App;
