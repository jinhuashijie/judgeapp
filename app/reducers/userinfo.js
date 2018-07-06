// import * as actionTypes from '../constants/userinfo'
const USERINFO_UPDATE = 'USERINFO_UPDATE'

const initialState = {
	cityName:'深圳0'
}
// actionTypes.
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case USERINFO_UPDATE:
            return action.data
        case 'selcetcity':
            return {...state,cityName:action.where}
        default:
            return state
    }
}


export function selectCity(cityname){
	return dispatch=>{
		dispatch({type:'selcetcity',where:cityname})
	}
}