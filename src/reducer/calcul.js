const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case CHOICE:
      const { choice, id } = action.payload;
      const question = state.questions.get(id);
      question.status = false;
      let response = false;

      if (question.response === choice) {
          question.status = false;
          response = true;
      }

      state.questions.set(id, question);

      return {
        ...state,
        responses : [ ...state.responses, {id, response }]
      };

    default:
      return state;
  }
};
export default reducer;