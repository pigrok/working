// import axios from "axios";
import api from "./axios/api";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");

  // 먼저 실행되었지만
  // async가 될 때 까지 아래 return문이 기다려주지 않음
  // => null이 나올 수 있으므로 아래 return문에 todos?를 넣어줌
  const fetchTodos = async () => {
    // const { data } = await axios.get("http://localhost:4000/todos");
    // const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    try {
      const { data } = await api.get("/todos");
      setTodos(data);
    } catch (error) {
      console.log(error);
      // 오류 처리를 수행합니다. 예를 들어 오류 상태를 설정하거나 오류 메시지를 표시할 수 있습니다.
    }
  };

  // 추가 함수
  const onSubmitHandler = async (todo) => {
    // axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, todo);
    await api.post("/todos", todo);
    setTodos([...todos, todo]);
    // db에는 Id가 자동으로 입력되지만
    // state에는 새로운 id 값을 알 수 없기 때문에
    // 다시 읽어오는 것
    fetchTodos();
    setTodo({
      title: "",
    });
  };

  // 삭제 함수
  const onDeleteClickHandler = async (id) => {
    // axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    await api.delete(`/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  // 수정 함수
  const onUpdateButtonClickHandler = async () => {
    await api.patch(`/todos/${targetId}`, {
      title: contents,
    });

    setTodos(
      todos.map((item) => {
        // == 동등연산자 사용 이유?
        // item.id 의 형과 targetId의 형이 달라서 ===일치연산자 사용x
        if (item.id == targetId) {
          // 원래의 item은 그대로 뿌려주고 title=>contents로 뿌려줘
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // db로 부터 값을 가져올 것
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정 영역 */}
        <input
          type="text"
          placeholder="수정할 아이디"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />
      </div>

      <div>
        {/* input 영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // 버튼 클릭 시, input에 들어있는 state를 이용하여 DB에 저장 (post 요청 )
            onSubmitHandler(todo);
          }}
        >
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              setTodo({
                title: e.target.value,
              });
            }}
          />
          <button type="submit">추가</button>
        </form>
        <div>
          {/* 데이터 영역 */}
          {todos?.map((item) => {
            return (
              <div key={item?.id}>
                {item?.id} : {item?.title}
                {/* 함수로 한번 감싸줘야지만 함수를 호출하고 렌더링하지 않음!! 중요 ()=> */}
                &nbsp;<button onClick={() => onDeleteClickHandler(item?.id)}>삭제</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
