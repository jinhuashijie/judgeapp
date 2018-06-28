import React from 'react'
import ReactDom from 'react-dom'
import {render} from 'react-dom';


import Update from './containers/upval'
function Test(){
	return <h2>test</h2>
}
function handleChange(){
	console.log("test")
}
render(<Update name={handleChange}/>, document.getElementById('root'));