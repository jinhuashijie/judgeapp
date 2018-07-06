
import 'whatwg-fetch'
import 'es6-promise'

function get(url){
	var result=fetch(url,{
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*'
		}
	})
}


export function getData(){
	var result =fetch('/api/1',{
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*'
		}
	});
	result.then(res=>{
		return res.text()
	}).then(text=>{
		console.log(text)
	})
	// var result1 =fetch('/api/2',{
	// 	credentials:'include',
	// 	headers:{
	// 		'Accept':'application/json,text/plain,*/*'
	// 	}
	// });
	// result1.then(res=>{
	// 	return res.text()
	// }).then(json=>{
	// 	console.log(json)
	// })
}


export function postData(){
	var result =fetch('/api/post',{
		method:"POST",
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body:"a=100&b=200"
	});
	result.then(res=>{
		console.log(144)
		return res.text()
	}).then(json=>{
		console.log(json,147)
	})
}





