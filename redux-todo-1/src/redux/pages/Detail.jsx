import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addReview, reviewTodoId } from "../modules/review";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === id);

  const reviews = useSelector((state) => state.reviews);

  const [review, setReview] = useState({
    content: "",
    reviewId: "",
    todoId: todo?.id,
  });

  console.log("content", review.content);
  // console.log("reviewId", reviewId);
  // console.log("todoId", todoId);
  return (
    <div>
      <div>
        {todo?.title}
        <br />
        {todo?.body}
        <br />
      </div>
      <form onSubmit={onSubmitHandler}>
        <input value={review.content} onChange={onChangeReviewHandler} placeholder="review" />
        <button type="submit">registor</button>
      </form>
      <div style={{ bordoer: "1px solid black", padding: "20px", margin: "20px" }}>
        {reviews.map((review) => {
          return <div key={review.id}>{review.content}</div>;
        })}
      </div>
      <button onClick={() => navigate("/")}>이전 화면으로</button>
    </div>
  );
}

export default Detail;
