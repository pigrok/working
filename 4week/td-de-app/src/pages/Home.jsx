import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let timerId = null;

  const [state, setState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      // 언마운트 시
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  })

  const throttle = (delay) => {
    if (timerId) {
      // timerId가 있으면 바로 함수 종료
      return;
    }
    // 쓰로틀링이 발동할 때 15번째줄을 만나면 state가 변경되면서 다시 리렌더링
    // 다시 함수 호출 timerId = null이 됌
    setState(!state);
    console.log(`API요청 실행! ${delay}ms 동안 추가요청은 안 받습니다!`);
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지나면 추가 요청 받습니다.`);
      timerId = null;
    }, delay);
  };

  //반복적인 이베튼 이후, delay가 지나면 fuction
  const debounce = (delay) => {
    if (timerId) {
      // 할당되어 있는 timerId에 해당하는 타이머 제거
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로부터 ${delay}ms 지났으므로 API 요청 실행!`);
      timerId = null;
    }, delay);
  };

  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <h1>Button 이벤트 예제</h1>
      <button
        onClick={() => {
          throttle(2000);
        }}
      >
        쓰로틀링 버튼
      </button>
      <button
        onClick={() => {
          debounce(2000);
        }}
      >
        디바운싱 버튼
      </button>
      <button
        onClick={() => {
          navigate("/company");
        }}
      >
        페이지 이동
      </button>
    </div>
  );
}

export default Home;
