import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
// import HomeHeader from '../../components/HomeHeader/index.jsx'
// import Category from '../../components/Category/index.js'
// import Ad from './subpage/Ad.js'
import List from '../List/index.jsx'
import Item2 from '../List/Item/index2.js'
@connect(
    state=>state
)
class Result extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            a:[]
        }
        this.say= this.say.bind(this)
        //this.toGoodsinfo=this.toGoodsinfo.bind(this)
    }
    componentDidMount(){
    }
    toGoodsinfo(e){
        console.log(e)
        console.log(e.target)
        //console.log(e.target.id)
        this.props.history.push("/goodsinfo/"+e)
        console.log(this.props)
    }
    say(){
        console.log(this.props.getresult)
        this.setState({
            a:this.props.getresult.data
        })
    }
    render() {
        return (
            <div className="list-container" onClick={this.say}>
                {this.props.getresult.data.map((item, index) => {
                    return <Item2 id={'info'+item.id} clickto={this.toGoodsinfo.bind(this,item.id)} key={index} data={item}/>
                })}
            </div>
        )
    }
}
export default Result

// {this.state.a.map((item, index) => {
//                     return <Item key={index} data={item}/>
//                 })}