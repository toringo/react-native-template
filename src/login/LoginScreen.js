import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import actions from './LoginActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
class LoginScreen extends Component<Props, State> {
    static navigationOptions = {
        title: '请登录',
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            this.props.navigation.navigate('App');
            return false;
        }
        return true;
    }

    handleToLogin=() => {
        const { loginDoing, loginSuccess, loginFail } = this.props;
        loginDoing();
        console.log('result');
        // const result = fetch('https://www.baidu.com/')
        // .then((res) => {
            const user = {
                name: 'zhangsan',
                age: 24,
            };
            loginSuccess(user); // 登录请求完成
        // }).catch((e) => {
        //     loginFail(); // 登录请求出错
        // });
    }

    render() {
        console.log('this.props', this.props);
        return (
          <View style={styles.container}>
            <Text>
                状态:
              {this.props.status}
            </Text>
            <TouchableOpacity onPress={() => { this.handleToLogin(); }} style={{ marginTop: 50 }}>
              <Text>登陆</Text>
            </TouchableOpacity>

          </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return ({
        status: state.login.status,
        isSuccess: state.login.isSuccess,
        user: state.login.user,
    });
};
const mapDispatchToProps = (dispatch) => ({
          loginDoing: () => { dispatch(actions.loginInDoing()); },
          loginSuccess: (user) => {
              console.log('user', user);
               dispatch(actions.loginInDone(user));
          },
          loginFail: () => { dispatch(actions.loginInError(false)); },
      });
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
