
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return state.concat(action.topic);
    default:
      return initialState;
  }
};
