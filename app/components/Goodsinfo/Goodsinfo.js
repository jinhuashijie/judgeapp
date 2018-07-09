import React from 'react'
//import { Router, Route, IndexRoute } from 'react-router'
import {BrowserRouter,Route,Link,Redirect,Switch,withRouter} from 'react-router-dom'
import Info from './subpage/Info.jsx'
import Comment from './subpage/Comment.js'

class Goodsinfo extends React.Component {
	constructor(props){
		super(props)
		this.state={
			data:{}
		}
	}
	componentWillMount(){
		var this0=this
		var ID=this.props.match.params.id
		//console.log(this.props)
		var result =fetch("/api/getgoodsinfo",{
			method:'POST', //这个必须大写；
			credentials:"include",
			headers:{
				'Accept':'application/json,text/plain,*/*',
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body:`a=${ID}`
		})
		result.then(res=>{
			return res.json()
		}).then(json=>{
			//console.log(json)
			this0.setState({
				data:json
			})
			//console.log(this0.state.data)
		})
	}
	componentDidMount(){
		//console.log(this.state)
	}
    render() {
		//console.log(this.state)
		const match=this.props.match
		let id=''||this.state.data
		console.log(id)
        return (<div>
        	<Info id={id}/>
        	<Comment id={id}/>
         </div>)
    }
}
 
export default Goodsinfo


        	// <div>{this.state.data.img}</div>
        	// <div>{this.state.data.title}</div>
        	// <div>{this.state.data.price}</div>














