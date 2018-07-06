import React from 'react'
//import { Router, Route, IndexRoute } from 'react-router'
import {BrowserRouter,Route,Link,Redirect,Switch,hashHistory} from 'react-router-dom'

import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import CityList from '../components/CityList/index.jsx'
import Goodsinfo from '../components/Goodsinfo/Goodsinfo.js'
// import User from '../containers/User/index.jsx'
// import Search from '../containers/Search/index.jsx'
// import Detail from '../containers/Detail/index.jsx'
// import NotFound from '../containers/404.jsx'
import Result from '../components/Result/Result.js'
// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
function City(){
	return <CityList/>
}
function City2(){
	return <h2>城市选择 2页面</h2>
}
// function Dashboard(){
// 	return <h2>分级路由主页面</h2>
// }
function Dashboard200(){
	return <h2>分级路由主页面200</h2>
}

const Users = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/:userId`} component={Dashboard200}/>
  </div>
)
class RouterMap extends React.Component {
    render() {
        return (<BrowserRouter><div>
        	<Switch>
            <Route path='/' exact component={Home}/>
             <Route path="/users" component={Users}/>
            <Route path='/city' component={City}/>
            <Route path='/city2' component={City2}/>
            <Route path='/result' component={Result}/>
            <Route path='/goodsinfo/:id'  component={Goodsinfo}/>
            </Switch>
        </div></BrowserRouter>)
    }
}

export default RouterMap


            // <Route path='/' component={App} />
// 					<Route component={Home}/>
//                     <IndexRoute component={Home}/>
//                      <Route path='/city' component={City}/>
//                     <Route path='/User' component={User}/>
//                     <Route path='/search/:type(/:keyword)' component={Search}/>
//                     <Route path='/detail/:id' component={Detail}/>
//                     <Route path='*' component={NotFound}/>
//                 </Route>






                   