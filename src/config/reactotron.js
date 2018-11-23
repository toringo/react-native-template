import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'xxx', // 调试的名称
  })
  .use(trackGlobalErrors()) // 设置监听全局错误
  .use(openInEditor()) // 设置在编辑器中打开错误
  .use(overlay()) // 设置图片遮盖图片（用于UI还原度对比）
  .use(asyncStorage()) // 设置异步存储调试
  .use(networking()) // 设置网络调试
  .connect(); // 连接应用（必须）
