import "./App.css";
import { useCallback, useState } from "react";
import _ from "lodash";
function App() {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  // 기억하고 있다가 렌더링이 다시 일어나도 새롭게 함수가 리턴되는게 아니라
  // return문을 똑같이 기억하고 searchText를 바꿔줌
  const debounce = (callback, delay) => {
    let timerId = null;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, [delay]);
    };
  };

  // useCallback => 메모이제이션 해놨기 때문에 렌더링이 일어나도
  const handleSearchText = useCallback((text) => {
    setSearchText(text);
  }, 2000);
  // _.debounce((text) => {
  //   setSearchText(text);
  // }, 2000),
  // []
  // 공통 함수
  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20PX",
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        style={{
          width: "300px",
        }}
        type="text"
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요."
        onChange={handleChange}
      />
      <p>Seartch Text : {searchText}</p>
      <p>Input Text: {inputText}</p>
    </div>
  );
}

export default App;
