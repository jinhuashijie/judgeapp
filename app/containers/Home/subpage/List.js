import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'

import ListCompoent from '../../../components/List/index.jsx'
import LoadMore from '../../../components/LoadMore/index.jsx'
import Item2 from '../../../components/List/Item/index2.js'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            a:[],
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            loading:true,
            next:1
        }
        this.loadMore=this.loadMore.bind(this)
    }
    componentDidMount() {
        var h=this
        var result =fetch('/api/2',{
            credentials:'include',
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
        });
        result.then(res=>{
            return res.text()
        }).then(text=>{
            //console.log(32,text)//这里输出的是后台传过来的数据
            var t=JSON.parse(text).data
            h.setState({
                    a:t
                })
        })
        const loadMoreFn=this.loadMore
        const wrapper = this.refs.wrapper
        const e=this
        let timeoutId
        function callback() {
            //console.log(654987)
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height//屏幕可视高度
            //console.log(top,windowHeight)
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
                //console.log(e.state.next)
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 10)
        }.bind(this),false);
    }
    loadMore(){
        let nextnum=this.state.next
        if(nextnum<=5){
            //console.log(this.state.next)
            this.setState({
                loading:false
            })
            var h=this
            var result =fetch('/api/2',{
                credentials:'include',
                headers:{
                    'Accept':'application/json,text/plain,*/*'
                }
            });
            result.then(res=>{
                return res.text()
            }).then(text=>{
                //console.log(32,text)//这里输出的是后台传过来的数据
                var t=JSON.parse(text).data
                h.setState({
                        a:h.state.a.concat(t)
                    })
                h.setState({
                        loading:true,
                        next:h.state.next+1
                    })
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.a.map((item, index) => {
                    return <Item2 key={index} data={item}/>
                })}
                {this.state.next<=5?(this.state.loading?<div  ref="wrapper" style={{marginTop:20,textAlign:"center",zIndex:5}} onClick={this.loadMore}>加载更多...</div>:<div style={{marginTop:20,textAlign:"center",zIndex:5,disabled:'disabled'}} onClick={this.loadMore}>加载中...</div>):<div style={{marginTop:20,textAlign:"center",zIndex:5}} >没有更多了</div>}
                
            </div>
        )
    }
}

export default List


// import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { getListData } from '../../../fetch/home/home'

// import ListCompoent from '../../../components/List/index.jsx'
// import LoadMore from '../../../components/LoadMore/index.jsx'

// import './style.less'

// class List extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
//         this.state = {
//             data: [],
//             hasMore: false,
//             isLoadingMore: false,
//             page: 0
//         }
//     }
//     componentDidMount() {
//         // 获取首页数据
//         this.loadFirstPageData()
//     }
//     // 获取首页数据
//     loadFirstPageData() {
//         const cityName = this.props.cityName
//         const result = getListData(cityName, 0)
//         this.resultHandle(result)
//     }
//     // 加载更多数据
//     loadMoreData() {
//         // 记录状态
//         this.setState({
//             isLoadingMore: true
//         })

//         const cityName = this.props.cityName
//         const page = this.state.page
//         const result = getListData(cityName, page)
//         this.resultHandle(result)

//         // 增加 page 技术
//         this.setState({
//             page: page + 1,
//             isLoadingMore: false
//         })
//     }
//     // 处理数据
//     resultHandle(result) {
//         result.then(res => {
//             return res.json()
//         }).then(json => {
//             const hasMore = json.hasMore
//             const data = json.data

//             this.setState({
//                 hasMore: hasMore,
//                 // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
//                 data: this.state.data.concat(data)
//             })
//         }).catch(ex => {
//             //if (__DEV__) {}
//                 console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2 className="home-list-title">猜你喜欢</h2>
//                 {
//                     this.state.data.length
//                     ? <ListCompoent data={this.state.data}/>
//                     : <div>{/* 加载中... */}</div>
//                 }
//                 {
//                     this.state.hasMore
//                     ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
//                     : ''
//                 }
//             </div>
//         )
//     }
// }

// export default List




