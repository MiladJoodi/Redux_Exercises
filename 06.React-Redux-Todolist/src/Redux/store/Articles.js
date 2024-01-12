// Actions
const addArticle = "ADD_ARTICLE";
const removeArticle = "REMOVE_ARTICLE";

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case addArticle: {
      let newArticle = action.payload;
      return [...state, newArticle];
    }
    case removeArticle: {
      const newState = [...state].filter((article) => article.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
};

// Action Creators

const addArticleAction = (data) => {
  return {
    type: addArticle,
    payload: data,
  };
};

const removeArticleAction = (id) => {
  return {
    type: removeArticle,
    id,
  };
};
