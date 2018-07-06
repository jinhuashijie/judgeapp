import React from 'react'
//import { Router, Route, IndexRoute } from 'react-router'
import {BrowserRouter,Route,Link,Redirect,Switch,withRouter} from 'react-router-dom'

class Goodsinfo extends React.Component {
	constructor(props){
		super(props)
		this.state={
			info:{
				img:"",
				title:"",
				star:'',
				price:"",
				desc:'',
				time1:'',
				time2:'',
				time3:''
			},
			judge:[
				{}
			]
		}
	}
	componentDidMount(){
		
	}
    render() {
		console.log(this.props)
		const match=this.props.match
        return (<div>
        	<div>这里是头部</div>
         </div>)
    }
}
 
export default Goodsinfo




