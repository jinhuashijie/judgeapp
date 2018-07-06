import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index.jsx'
import List from '../../../components/List/index.jsx'
// import { getAdData } from '../../../fetch/home/home'
import 'whatwg-fetch'
import 'es6-promise'
//上线

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
            // var result =fetch('/api/2',{
            //     credentials:'include',
            //     headers:{
            //         'Accept':'application/json,text/plain,*/*'
            //     }
            // });
            // result.then(res=>{
            //     return res.text()
            // }).then(text=>{
            //     console.log(text)//这里输出的是后台传过来的数据
            // })
        // 获取广告数据
        // const result = getAdData()
        // console.log(result)
        // result.then(res => {
        //     return res.json()
        // }).then(json => {
        //     // 处理获取的数据
        //     const data = json
        //     if (data.length) {
        //         this.setState({
        //             data: data
        //         })
        //     }
        // }).catch(ex => {
        //     // 发生错误
        //     // if (__DEV__) {}
        //         console.error('首页广告模块获取数据报错, ', ex.message)
            
        // })
    }
    render() {
        return (
            <div style={{height:333}}>
                <List/>
            </div>
        )
    }
}

export default Ad




// import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// import HomeAd from '../../../components/HomeAd/index.jsx'
// import { getAdData } from '../../../fetch/home/home'

// class Ad extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
//         this.state = {
//             data: []
//         }
//     }
//     render() {
//         return (
//             <div>
//             {
//                 this.state.data.length
//                 ? <HomeAd data={this.state.data}/>
//                 : <div>{/* 加载中... */}</div>
//             }
//             </div>
//         )
//     }
//     componentDidMount() {
//         // 获取广告数据
//         const result = getAdData()
//         result.then(res => {
//             return res.json()
//         }).then(json => {
//             // 处理获取的数据
//             const data = json
//             if (data.length) {
//                 this.setState({
//                     data: data
//                 })
//             }
//         }).catch(ex => {
//             // 发生错误
//             if (__DEV__) {
//                 console.error('首页广告模块获取数据报错, ', ex.message)
//             }
//         })
//     }
// }

// export default Ad