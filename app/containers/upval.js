import React from 'react'
import ReactDom from 'react-dom'
import {render} from 'react-dom';
import Val from './val'

class Update extends React.Component{
	render(){
		return (<div>
			<h2>父组件的值++123</h2>
			<Val/>
		</div>) 
	}
}



export default Update