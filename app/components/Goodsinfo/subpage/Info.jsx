import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import './style2.less'
//import { getInfoData } from '../../../fetch/detail/detai'
//import DetailInfo from '../../../components/DetailInfo'
import Star from '../../Star/index2.jsx'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false,
            starnum:0
        }
    }
    componentWillMount(){
        console.log(this.props)
        var ce=this.props.star
        console.log(ce)
        this.setState({
            starnum:ce
        })
    }
    render() {
        console.log(this.props)
        let data=this.props.id||''
        console.log(data)
        console.log(data.star)
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={data.img?data.img.replace(".",""):""}  alt={data.title}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <p dangerouslySetInnerHTML={{__html: data.timer}} className="info-desc"></p>
            </div>
        )
    }
    componentDidMount() {
    }
   
}

export default Info









