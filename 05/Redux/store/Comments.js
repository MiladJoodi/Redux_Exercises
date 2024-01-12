// Actions
const addComment = "ADD_COMMENT";
const removeComment = "REMOVE_COMMENT";

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addComment: {
      let newComment = action.payload;
      return [...state, newComment];
    }
    case removeComment: {
      const newState = [...state].filter((comment) => comment.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
}

// Action Creators

export const addCommentAction = (data) => {
  return {
    type: addComment,
    payload: data,
  };
};

export const removeCommentAction = (id) => {
  return {
    type: removeComment,
    id,
  };
};
