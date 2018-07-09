import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item/index.jsx'

import './style3.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        var this0=this
        // var ID=this.props.match.params.id
        //console.log(this.props)
        var result =fetch("/api/say",{
            method:'POST', //这个必须大写；
            credentials:"include",
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:"a=100"//`a=${ID}`
        })
        result.then(res=>{
            return res.json()
        }).then(json=>{
            //console.log(json)
            const arr=Object.values(json)
            this0.setState({
                data:arr
            })
        })
        //console.log(this.state)
    }
    render() {
        // 获取数据
        //const data = this.props.data

        return (
            <div className="comment-list">
                <h3>用户点评</h3>
                {this.state.data?this.state.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                }):''}
            </div>
        )
    }
}

export default CommentList




// class CommentList extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
//     }
//     render() {
//         // 获取数据
//         const data = this.props.data

//         return (
//             <div className="comment-list">
//                 {data.map((item, index) => {
//                     return <Item key={index} data={item}/>
//                 })}
//             </div>
//         )
//     }
// }







