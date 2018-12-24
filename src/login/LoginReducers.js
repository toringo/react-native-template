import { handleAction, handleActions } from 'redux-actions';
import actionTypes from '../actionsType';

const initialState = {
    status: '点击登陆',
    isSuccess: false,
    user: null,
};

const loginReducer = handleActions({
    [actionTypes.LOGIN_IN_DOING]: (state, action) => ({
            ...state,
            status: '正在登陆...',
            isSuccess: false,
            user: null,
        }),
    [actionTypes.LOGIN_IN_DONE]: (state, action) => {
        console.log('登陆成功action', action);
        return ({
            ...state,
            status: '登陆成功',
            isSuccess: true,
            user: action.payload,
        });
    },
    [actionTypes.LOGIN_IN_ERROR]: (state, action) => ({
            ...state,
            status: '登录出错...',
            isSuccess: true,
            user: null,
        }),
  }, initialState);
export default loginReducer;
