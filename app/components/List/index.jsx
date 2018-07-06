import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item/index.js'
import LoadMore from '../LoadMore/index.jsx'
import './style.less'
//上线
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            a:[]
        }
    }
    componentDidMount(){
            var h=this
            var result =fetch('/api/1',{
                credentials:'include',
                headers:{
                    'Accept':'application/json,text/plain,*/*'
                }
            });
            result.then(res=>{
                return res.text()
            }).then(text=>{
                //console.log(text)//这里输出的是后台传过来的数据
                h.setState({
                        a:JSON.parse(text)
                    })
            })
            var time=setTimeout(function(){
                },1000)
            
    }
    render() {
        return (
            <div className="list-container">
                {this.state.a.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List


//<div className="list-container">
//                {this.props.data.map((item, index) => {
//                    return <Item key={index} data={item}/>
//                })}
//            </div>



