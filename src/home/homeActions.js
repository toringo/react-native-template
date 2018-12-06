export const createUser = (dispatch) => user => dispatch({
    type: 'ADD_USER',
    user,
  });
