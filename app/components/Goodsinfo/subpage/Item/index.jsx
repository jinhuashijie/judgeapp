import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../../Star/index.jsx'

import './style.less'

class CommentItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        console.log(this.props)
        const item = this.props.data

        return (
            <div className="comment-item">
                <div>
                    <i className="icon-user"><img src="/img/21.jpg"/></i>
                    &nbsp;
                    <strong style={{color:'black'}}>{item.phone}</strong>
                </div>
                <Star star={item.star}/>
                <div>{item.msg}</div>
            </div>
        )
    }
}

export default CommentItem


//class CommentItem extends React.Component {
//    constructor(props, context) {
//        super(props, context);
//        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
//    }
//    render() {
//        // 获取数据
//        const item = this.props.data
//
//        return (
//            <div className="comment-item">
//                <h3>
//                    <i className="icon-user"></i>
//                    &nbsp;
//                    {item.username}
//                </h3>
//                <Star star={item.star}/>
//                <p>{item.comment}</p>
//            </div>
//        )
//    }
//}





