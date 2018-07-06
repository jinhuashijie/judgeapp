import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import Category from '../../components/Category/index.js'
import Ad from './subpage/Ad.js'
import List from './subpage/List.js'
//@connect(
//    state=>state,
//)
@connect(
    state=>state
)
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <HomeHeader local={this.props} cityName={this.props.userinfo.cityName}/>
                <div style={{height: '1px',background:"red"}}>{/* 分割线 */}</div>
                <Category/>
                <Ad/>
                <List/>
                
            </div>
        )
    }
}

//<HomeHeader cityName={this.props.userinfo.cityName}/>
//                <Category/>
//                <div style={{height: '15px'}}>{/* 分割线 */}</div>
//                <Ad/>
//                <List cityName={this.props.userinfo.cityName}/>


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
//export default connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(Home)

export default Home