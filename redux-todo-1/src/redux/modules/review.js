export const addReview = (review) => {
  return {
    type: "ADD_REVIEW",
    payload: review,
  };
};

const initialState = {
  review: [],
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reviews;
