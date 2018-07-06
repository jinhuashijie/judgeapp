import React from 'react'
//import { Router, Route, IndexRoute } from 'react-router'
import {BrowserRouter,Route,Link,Redirect,Switch,withRouter} from 'react-router-dom'

import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import CityList from '../components/CityList/index.jsx'
// import User from '../containers/User/index.jsx'
// import Search from '../containers/Search/index.jsx'
// import Detail from '../containers/Detail/index.jsx'
// import NotFound from '../containers/404.jsx'
import Result from '../components/Result/Result.js'
// function City(){
// 	return <CityList/>
// }
// function City2(){
// 	return <h2>城市选择 2页面</h2>
// }
function Dashboard1(){
	return <h2>分级路由主页面1</h2>
}
function Dashboard2(){
	return <h2>分级路由主页面2</h2>
}
function Dashboard6(){
	console.log(location)
	return <h2>分级路由主页面6</h2>
}
// function Result(){
// 	return <h2>搜索结果页面</h2>
// }
//@withRouter
class Dashboard extends React.Component {
	componentDidMount(){
		//console.log(this.props)
	}
    render() {
		console.log(this.props)
		const match=this.props.match
        return (<div>
        	<div>123</div>
            <Switch>
	            <Route path="/dashboard/1" component={Dashboard1}/>
	            <Route path="/dashboard/2" component={Dashboard2}/>
	            <Route path="/dashboard/6" component={Dashboard6}/>
            </Switch>
         </div>)
    }
}
 
export default Dashboard
                   




















