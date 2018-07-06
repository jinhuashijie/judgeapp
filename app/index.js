import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'
// import { hashHistory } from 'react-router'
//import configureStore from './store/configureStore'
// console.log(hashHistory)//居然直接报错了
// import './static/css/common.less'
// import './static/css/font.css'
//import './fonticon/style.css'
import {getData,postData} from  './fetch/test.js'
//getData()
// postData()
// 创建 Redux 的 store 对象
//const store = configureStore()store={store}
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
import RouteMap from './router/routeMap'

render(<Provider store={store}>
            <RouteMap />
    </Provider>,
    document.getElementById('root')
)
// history={hashHistory}

