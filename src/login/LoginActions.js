import { createActions } from 'redux-actions';
import actionTypes from '../actionsType';

 export default createActions({
    [actionTypes.LOGIN_IN_DOING]: () => 'doing',
    [actionTypes.LOGIN_IN_DONE]: (user) => (user),
    [actionTypes.LOGIN_IN_ERROR]: () => 'fail',
 });


 /** *+++++++另一种实现方式+++++++++ */
// import types from '../actionsType';

// 模拟用户信息
// const user = {
//     name: 'zhangsan',
//     age: 24,
// };


// function isLogining() {
//     return {
//         type: types.LOGIN_IN_DOING,
//     };
// }

// function loginSuccess(isSuccess, users) {
//     console.log('success');
//     return {
//         type: types.LOGIN_IN_DONE,
//         user: users,
//     };
// }

// function loginError(isSuccess) {
//     console.log('error');
//     return {
//         type: types.LOGIN_IN_ERROR,
//     };
// }


// const login = () => dispatch => {
//     dispatch(isLogining());
//     // 模拟用户登录

//     const result = fetch('https://www.baidu.com/')
//         .then((res) => {
//             dispatch(loginSuccess(true, user)); // 登录请求完成
//         }).catch((e) => {
//             dispatch(loginError(false)); // 登录请求出错
//         });
// };


// export default {
//     login,
// };
