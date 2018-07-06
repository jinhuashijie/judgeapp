// import * as actionTypes from '../constants/userinfo'
const USERINFO_UPDATE = 'USERINFO_UPDATE'

const initialState = {
	data:[]
}
// actionTypes.
export default function getresult (state = initialState, action) {
    switch (action.type) {
        case USERINFO_UPDATE:
            return action.data
        case 'getresult':
            console.log(action)
            return {...state,data:action.searesult}
        default:
            return state
    }
}


export function getResult(title){
	return dispatch=>{
        var result =fetch('/api/result',{
            method:"POST",
            credentials:'include',
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            //body:valx
            body:`a=${title}`
        });
        result.then(res=>{
            console.log(144)
            return res.text()
        }).then(json=>{
            // ss = s.split(",");
            console.log(JSON.parse(json),147)
            let t=JSON.parse(json)
            let data=[]
            console.log(t)
            var key;
            for(key in t){
                data.push(t[key])
            }
            console.log(data)
            dispatch({type:'getresult',searesult:data})
        })
		//dispatch({type:'getresult',where:cityname})
	}
}