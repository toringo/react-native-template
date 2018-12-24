import { handleAction, handleActions } from 'redux-actions';
// import actions from './homeActions';
import actionTypes from '../actionsType';

const initialState = {
    bookList: [],
  };

  // 单个时候的reducer
// const pageMainReducer = handleAction(actions.getBookList, (state, action) => ({
//     ...state,
//     bookList: action.payload,
// }), initialState);
// export default pageMainReducer;


// const initialState = {
//   bookList: [],
// };

// 多个reducer
const homeReducer = handleActions({
    [actionTypes.BOOK_LIST_GET]: (state, action) => {
        console.log('BOOK_LIST_GETstate', state);
        return ({
            ...state,
            bookList: action.payload,
          });
    },
    [actionTypes.BOOK_DELETE]: (state, action) => {
        console.log('state', state);
        return ({
            ...state,
            bookList: state.bookList.filter(l => l.id !== action.payload.id),
          });
    },
  }, initialState);
export default homeReducer;
