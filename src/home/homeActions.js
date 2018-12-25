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
        id: 1,
        title: '倾城之恋',
        description: '《倾城之恋》是一个动听而又近人情的故事。《倾城之恋》里，从腐旧的家庭里走出来的白流苏，香港之战的洗礼并不曾将她感化成为革命女性：香港之战影响范柳原，使她转向平实的生活，终于结婚了，但结婚并不使他变为圣人，完全放弃往日的生活习惯与作风。',
      }, {
        id: 2,
        title: '半生缘',
        description: '半生缘》是张爱玲第一部完整的长篇小说，原名《十八春》，一九五一年结稿，后来张爱玲旅美期间，进行改写，删掉了一些略带政治色彩的结尾，改名为《半生缘》。',
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
