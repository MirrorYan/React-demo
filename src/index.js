/* Entry File */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// unregister()用于取消对serviceWorker的注册并返回一个Promise
// 没有找到注册时,这个Promise返回false,否则不论取消成功与否都返回true
// 如果想让应用离线工作并能更快加载,可以将unregister()替换成register()
serviceWorker.unregister();