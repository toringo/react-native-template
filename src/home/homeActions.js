import { createActions, createAction } from 'redux-actions';

// export const createUser = user => ({
//     type: 'ADD_USER',
//     user,
// });
// const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
// export const incrementCounter = createActions('COUNTER_INCREMENT');
// export const decrementCounter = createActions('COUNTER_DECREMENT');

// const { increment, decrement } = createActions('INCREMENT', 'DECREMENT');
// export const decrement = createActions('DECREMENT');
// export const increment = createActions('INCREMENT');

import actionTypes from '../actionsType';

// const getBookList = createAction(actionTypes.BOOK_LIST_GET, () => {
//   const bookList = [{
//     id: '1',
//     title: '123',
//     description: '123',
//   }, {
//     id: '2',
//     title: '234',
//     description: '234',
//   }];
//   return bookList;
// });

export default createActions({
    [actionTypes.BOOK_LIST_GET]: () => {
      const bookList = [{
        id: '1',
        title: '123',
        description: '123',
      }, {
        id: '2',
        title: '234',
        description: '234',
      }];
      return bookList;
    },
    [actionTypes.BOOK_DELETE]: (id) => {
      console.info(`删除id为${id}的Book`);
      return { id };
    },
});

// export default {
//   getBookList,
// };
