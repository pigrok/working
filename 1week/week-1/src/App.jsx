// 리액트 화면을 렌더링할지를 state의 변화에 따라 결정한다!
// 단순 변수는 무시한다!!!!!!!!!
// import React, { useState } from "react";

// function App() {
//   const [obj, setObj] = useState({
//     name: "wonjang",
//     age: 21,
//   });

//   return (
//     <div>
//       <div>{obj.name}</div>
//       <button
//         onClick={() => {
//           // obj는 실제로 바뀌었으나, 렌더링 되지 않음
//           // 해결 => 새로운 객체를 만들어줘야함.
//           // 주소값을 여전히 바라보고 있으므로 다른 주소르 바라보게끔 새로운 객체를 생성
//           obj.name = "twojang";
//           const obj2 = { ...obj }; // 스프레드 문법
//           setObj(obj2);
//           // obj.name = "twojang";
//           // console.log(obj);
//           // setObj(obj);
//         }}
//       >
//         변경!
//       </button>
//     </div>
//   );
// }

// export default App;
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React, { useState } from "react";

// function App() {
//   const [id, setId] = useState("");
//   const [pwd, setPwd] = useState("");

//   // id 필드가 변경될 경우
//   const onIdChangeHandler = (event) => {
//     setId(event.target.value);
//   };
//   // pwd 필드가 변경될 경우
//   const onPwdChangeHandler = (event) => {
//     setPwd(event.target.value);
//   };
//   return (
//     <div>
//       아이디 : {""}
//       <input type="text" value={id} onChange={onIdChangeHandler} />
//       <br />
//       비밀번호 : {""}
//       <input type="password" value={pwd} onChange={onPwdChangeHandler} />
//       <br />
//       <button
//         onClick={function () {
//           alert(
//             `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pwd}입니다.`
//           );
//           setId("");
//           setPwd("");
//         }}
//       >
//         로그인
//       </button>
//     </div>
//   );
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React, { useState } from "react";

// function App() {
//   const [fruits, setFruits] = useState("");

//   return (
//     <div>
//       과일 :{" "}
//       <input
//         value={fruits}
//         onChange={function (event) {
//           // 콘솔 찍었을 때 target 값이 중요!
//           // event객체 안에 있는 target 객체 안에 => 입력한 값이 들어옴.
//           // console.log(event.target.value);
//           setFruits(event.target.value);
//         }}
//       />
//       <br /> <br />
//       {fruits}
//     </div>
//   );
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React, { useState } from "react";

// function App() {
//   // 변수를 안쓰고 state를 쓰는 목적!
//   // ui를 바꾸기 위해서!!!! 중요

//   // hook 종류
//   // useState, useEffect, useContext, useMemo
//   // useDispatch
//   // const [state, setState] = useState('initial Value');
//   // const [count, setCount] = useState(0);
//   // const [todoList, setTodoList] = useState([]);

//   //초기 값의 벨류는 김 할아버지이고
//   // 이 name을 변경하기위해 setName이라는 메서드를 호출
//   const [name, setName] = useState("김할아버지");

//   return (
//     <div>
//       {name}
//       <br />
//       <button
//         onClick={function () {
//           setName("박할아버지");
//         }}
//       >
//         클릭
//       </button>
//     </div>
//   );
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React from "react";
// import Child from "Child";

// function App() {
//   const name = "test";
//   return <Child name={name}>이름</Child>;
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ;

// import Layout from "Layout";
// import React from "react";

// layout.js에서 가져와 header밑으로 출력
// function App() {
//   return <Layout>App 컴포넌트에서 보낸 값.</Layout>;
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React from "react";

// // 상위 컴포넌트에서  <> 태그 사이에 어떤 값을 두면
// // 컴포넌트는 자동적으로 children이라는 props를 갖게 됨.
// function App() {
//   return <User>안녕하세요!</User>;
// }

// function User(props) {
//   console.log("props", props); // props {children: '안녕하세요!'}
//   return <div>{props.children}</div>;
//   // 자바스크립트 문법으로 {props.children}을 넣어주면 상단의 "안녕하세요"가 출력됨.
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React from "react";

// function Son(props) {
//   return <div>나는 {props.gFName}의 손자입니다!</div>;
// }

// function Mom(props) {
//   const name = "홍부인";
//   const gFName = props.grandFaName;
//   return <Son gFName={gFName} />;
// }

// function GrandFa() {
//   const name = "조할배";
//   return <Mom grandFaName={name} />;
// }

// function App() {
//   return <GrandFa />;
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// import React from "react";

// function App() {
//   return <GrandFather />;
// }

// function GrandFather() {
//   return <Mother />;
// }

// function Mother() {
//   const name = "홍부인";
//   // 변수만 할당하면 자식 컴포넌트에서는 name = "홍부인"을 알 수 없으므로
//   // motherName={name}을 통해 부모 => 자식 컴포넌트로 데이터를 전달함.
//   return <Child motherName={name} />;
// }

// // props를 통해 부모=> 자식 데이터가 전달됌.
// // props는 변수라 다른 이름으로 설정해도 되지만
// // props로 사용 약속!
// function Child(props) {
//   console.log("props", props.motherName);
//   return <div>나는 {props.motherName}의 아들이에요!</div>;
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import React from "react";

// export default function App() {
//   const number = 9;

//   const pTagStyle = {
//     color: "red",
//   };

//   return (
//     // class를 만들 때는 className !
//     // style 태그에서 객체를  넣어줄 때는 중괄호를 한번 더! => style= {{}}
//     <div className="test-class">
//       <p style={pTagStyle}>안녕하세요 리액트입니다.</p>
//       {/* 주석을 사용하는 방법 */}
//       {/* 삼항 연산자 사용해보기 */}
//       <p style={pTagStyle}>
//         {number > 10 ? number + "은 10보다 크다" : number + "은 10보다 작다"}
//       </p>
//     </div>
//   );
// }
