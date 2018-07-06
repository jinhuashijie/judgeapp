import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from 'react-router-dom'
import './style.less'
import HomeHeader from '../HomeHeader/index.jsx'
import {connect} from 'react-redux'
import {selectCity} from '../../reducers/userinfo.js'
@withRouter
@connect(
    state=>state,
    {selectCity}
)
class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickHandle=this.clickHandle.bind(this)
        this.clickHandle2=this.clickHandle2.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
    }
    clickHandle2(){
        //console.log(this.props)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="city-list-container">
                <div className='select'>
                    <span style={{width:"10%",display: 'inline-block',textAlign:"center"}} onClick={this.clickHandle2}>返回</span>
                    <span style={{width:"80%",display: 'inline-block',textAlign:"center"}}>请选择城市</span>
                </div>
                <div className='' style={{width:"100%",textAlign:"center"}}>{this.props.userinfo.cityName}</div>
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        console.log(cityName)
        //this.props.history.push('/')
        this.props.selectCity(cityName)
        //const changeFn = this.props.changeFn
        //changeFn(cityName)
    }
}

export default CityList