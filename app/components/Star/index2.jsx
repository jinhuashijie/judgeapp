import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            star: [],
            test:[],
            starnum:4
        }
    }
    componentWillMount(){
        var ce=this.props.star
        this.setState({
            starnum:ce||0
        })
        console.log(this.props)
    }
    componentDidMount(){
       
    }
    render() {
        console.log(this.props)
        // 获取 star 数量，并取余5（最多5个star）
        var num =this.props.star
        var h=[]
        var h2=[]
        for(var i=1;i<=num;i++){
            h.push(i)
        }
        var num2=5-num
        for(var i=1;i<=num2;i++){
            h2.push(i)
        }
        return (
            <div className="star-container">
                {
                    h.map(function(item,index){

                        return <i key={index}><img src="/img/s1.jpg"/></i>
                    })
                }
                {
                    h2.map(function(item,index){
                        return <i key={index}><img src="/img/s2.jpg"/></i>
                    })
                }
            </div>
        )
    }
}

export default Star