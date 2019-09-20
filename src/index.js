import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import todoApp from './js/reducers';
import './index.css';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './js/actions';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let store = createStore(todoApp);

// console.log(store.getState());
// 每次更新state打印日志
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// 发起一系列action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// 通过执行subscribe返回的函数停止监听
// unsubscribe();

function func() {
  let num = 0;
  function logNum() {
    console.log(++num);
  }
  return logNum;
}
let myFunc = func();
myFunc();
myFunc();

ReactDOM.render(<App />, document.getElementById('root'));

// unregister()用于取消对serviceWorker的注册并返回一个Promise
// 没有找到注册时,这个Promise返回false,否则不论取消成功与否都返回true
// 如果想让应用离线工作并能更快加载,可以将unregister()替换成register()
serviceWorker.unregister();