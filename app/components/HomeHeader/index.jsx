import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import './style.less'
import {getResult} from '../../reducers/result.js'
@connect(
    state=>state,
    {getResult}
)
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.change=this.change.bind(this)
        this.sea=this.sea.bind(this)
        this.seakey=this.seakey.bind(this)
        this.state={
            keyval:''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    transtest(){
        console.log("跨组件传输操作函数")
    }
    change(){
        console.log(this.props.local)
        this.props.local.history.push('/city')
    }
    sea(){
        console.log("进入搜索结果页面")
        console.log(this.props)
        this.props.getResult(this.state.keyval)
        this.props.local.history.push('/result')
    }
    seakey(e){
        console.log("搜索关键字")
        this.setState({
                keyval:e.target.value
            })
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span onClick={this.change}>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <input style={{color:'red'}} type="text" onChange={this.seakey} placeholder="请输入关键字"/>
                        <button className="icon-search" onClick={this.sea} > &nbsp;搜索</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader