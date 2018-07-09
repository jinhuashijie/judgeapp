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
            starnum:ce
        })
    }
    componentDidMount(){
        console.log(this.props.star)
        //console.log(this.state)
        var h=[]
        var h2=[]
        var g=this
        var num=this.state.starnum
        for(var i=1;i<=num;i++){
            h.push(i)
        }
        var num2=5-this.state.starnum
        for(var i=1;i<=num2;i++){
            h2.push(i)
        }
        console.log(h)
        this.setState({
            test:h,
            star:h2,
        })
        //console.log(this.state.test)
    }
    render() {
        // 获取 star 数量，并取余5（最多5个star）
        return (
            <div className="star-container">
                {
                    this.state.test.map(function(item,index){
                        return <i key={index}><img src="/img/s1.jpg"/></i>
                    })
                }
                {
                    this.state.star.map(function(item,index){
                        return <i key={index}><img src="/img/s2.jpg"/></i>
                    })
                }
            </div>
        )
    }
}

export default Star