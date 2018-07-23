import React, { Component } from "react"
import "./index.css"
import axios from "axios";
import { Carousel, WingBlank, } from 'antd-mobile';
import { ActivityIndicator } from "antd-mobile"
// import ReactDOM from "react-dom";
// import CountDownTimer from 'react_native_countdowntimer'
import ReactSwipe from 'react-swipe';
class App_body extends Component {
    constructor() {
        super()
        this.state = {
            animating: true,
            looplist: [],
            clearfixlist: [],
            articlelist: [],
            dllist: [],
            bluepic: [],
            bluepic2: [],
            bluepic3: [],
            bluepic4: [],
            bluepic5: [],
            goodshop: [],
            goodslist: [],
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            imgHeight: 176,
            adimg: '',
            animating:true,
        }
    }
    render() {
        return (

            <div className="app-content">
                <div className="index-wrap">
                     { /*下拉刷新*/ }
                    <div className="pull-refresh">
                  
                        <div className="swiper-container swiper-container-vertical swiper-container-free-mode">
                            <div className="pull-to-refresh-layer">
                            </div>
                            <div className="max-slide">
                                <ReactSwipe className="carousel" swipeOptions={{
                continuous: true,
                auto: 3000
            }} key={this.state.looplist.length}>
                                         {
            this.state.looplist.map((item, index) => <img src={item.link} key={item.id} alt={item.linkinfo}/>)}
                                </ReactSwipe>
                            </div>
                            
                            <div className="max-index-ad">
                                <a><img src="http://image.yijiago.com/c0/86/c2/e3d3c0d91c16b2b52a26316f6b862f1c0ea768c0.gif" alt=""/></a>
                            </div>
                            <div className="max-index-article">
                                <div className="article-title">
                                    <img src="http://dev.yijiago.com:8102/themes/appmall/images/m_index_article_title.png" alt=""/>
                                </div>
                                <div className="article-text">
                                       
                            { /*===============竖直轮播======================*/ }

                                     <WingBlank>
                                        <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            cellSpacing={10}
            slideWidth={0.2}
            autoplay
            infinite
            >
            {this.state.articlelist.map(item => <div key={item.id} className="v-item">{item.linkinfo}</div>
            )}

                                          <div className="v-item"> </div>
                                          <div className="v-item"> </div>
                                          
                                          
                                        </Carousel>
                                      </WingBlank>

            



                                </div>

                                { /*限时抢购*/ }


                                <div className="max-index-qgou">
                                    <dl className="dl">
                                        <dt className="index-title">
                                            <a className="intime"><span className="iconfont icon-shijian"></span><span>限时抢购</span></a>
                                            <span className="more">我要更多</span>        
                                        </dt>
                                        <dd className="index-qgou">
                                           
                                        </dd>
                                    </dl>
                                    <dl className="max-group">
                                        <dd>
                                            <ul className="chearfix_1">
                                           { this.state.bluepic.map(item => <li key={item.id}><img src={item.link} alt={item.linkinfo}/></li>
            )}
                                            </ul>
                                        </dd>
                                    </dl>
                                     <dl className="max-group">
                                        <dd>
                                            <ul className="chearfix_1">
                                           { this.state.bluepic2.map(item => <li key={item.id}><img src={item.link} alt={item.linkinfo}/></li>
            )}
                                            </ul>
                                        </dd>
                                    </dl>
                                    <dl className="max-group bluepic3">
                                        <dd>
                                            <ul className="chearfix_1">
                                            { this.state.bluepic3.map(item => <li key={item.id}><img src={item.link} alt={item.linkinfo}/></li>
            )}

                                             </ul>
                                        </dd>
                                    </dl>
                                     <dl className="max-group bluepic4">
                                        <dd>
                                            <ul className="chearfix_1">
                                            { this.state.bluepic4.map(item => <li key={item.id}><img src={item.link} alt={item.linkinfo}/></li>
            )}

                                             </ul>
                                        </dd>
                                    </dl>
                                    <dl className="max-group bluepic5">
                                        <dd>
                                            <ul className="chearfix_1">
                                            { this.state.bluepic5.map(item => <li key={item.id}><img src={item.link} alt={item.linkinfo}/></li>
            )}

                                             </ul>
                                        </dd>
                                    </dl>
                                    
{ /*=====================有间好店=====================================================*/ }    
                                <div className="max-index-qgou">
                                    <dl className="dl">
                                        <dt className="index-title">
                                            <a className="intime"><span className="iconfont icon-huo"></span><span>有间好店</span></a>
                                                
                                        </dt>
                                        <dd className="index-qgou">
                                            <ul>
                                                <div className="swiper-container swiper-container-horizontal">
                                                     <WingBlank>
                                                        <Carousel className="goodshop-space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            dots={false}
            autoplay
            infinite


            afterChange={index => this.setState({
                slideIndex: index
            })}
            >
                                                            {
            this.state.goodshop.map((item, index) => <dl key={item.id}><dt><img src={item.link
                } /></dt><dd><span className="title">{item.bt}</span></dd></dl>


            )
            }
                                                        </Carousel>
                                                      </WingBlank>


                                                </div>
                                            </ul>
                                        </dd>
                                    </dl>
                                    </div>
    
                                { /*=================================================*/ }    
                                    <div className="max-index-ad">
                                        <img src={this.state.adimg} />
                                    </div>
                                { /*===================================================*/ }
                                    <div className="max-index-goods">
                                        <dl>
                                            <dt className="index-title">
                                                <span className="iconfont icon-jushoucang"></span>
                                                <span className="content">商品推荐</span>
                                            </dt>
                                            <dd className="ndex-qgou">
                                                <ul className="clearfix">
                                                {this.state.goodslist.map(item => <li key={item.item_id} className="goodsitem">
                                                    <a ><div className="goods-pic">
                                                            <img src={item.image_default_id} alt={item.title}/></div>
                                                        <div className="goods-info">
                                                            <span className="goods-name">{item.title}</span>
                                                            <div className="btn-box">
                                                                <span className="goods-price">￥{item.price}</span>
                                                                <span className="mk-price">￥{item.mkt_price}</span>
                                                                <p className="num">{item.sold_quantity
                }人付款</p>
                                                            </div>
                                                        </div>

                                                    </a>
                                                    </li>)}
                                                </ul>
                                            </dd>
                                        </dl>
                                        <span className="more">敬请期待更多商品更新!</span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                        <ActivityIndicator
                               toast
                               text="Loading..."
                               animating={this.state.animating}
                             />
            </div>


        )
    }
    componentDidMount() {

        axios.get("/index.php/topapi?method=widgets&platform=app2&tml=index&showLoading=true&v=v3&_rand=0.7636802063143882").then(res => {
            // console.log(res.data.data[0].setting.pic)
            console.log(res.data.data[1].setting.text)
            var obj1 = res.data.data[0].setting.pic;
            var arr1 = [];
            for (var i in obj1) {
                arr1.push(obj1[i])
            }
            var obj2 = res.data.data[1].setting.text;
            var arr2 = [];
            for (var i in obj2) {
                arr2.push(obj2[i])
            }
            var obj3 = res.data.data[2].setting.pic;
            var arr3 = [];
            for (var i in obj3) {
                arr3.push(obj3[i])
            }
            var obj4 = res.data.data[3].params.actitem;
            var arr4 = [];
            for (var i in obj4) {
                arr4.push(obj4[i])
            }
            var obj5 = res.data.data[4].setting.pic;
            var arr5 = [];
            for (var i in obj5) {
                arr5.push(obj5[i])
            }
            var obj6 = res.data.data[5].setting.pic;
            var arr6 = [];
            for (var i in obj6) {
                arr6.push(obj6[i])
            }
            var obj7 = res.data.data[6].setting.pic;
            var arr7 = [];
            for (var i in obj7) {
                arr7.push(obj7[i])
            }
            var obj8 = res.data.data[7].setting.pic;
            var arr8 = [];
            for (var i in obj8) {
                arr8.push(obj8[i])
            }
            var obj9 = res.data.data[8].setting.pic;
            var arr9 = [];
            for (var i in obj9) {
                arr9.push(obj9[i])
            }
            var obj10 = res.data.data[9].setting.text;
            var arr10 = [];
            for (var i in obj10) {
                arr10.push(obj10[i])
            }
            var obj11 = res.data.data[10].setting.pic;
            var arr11 = [];
            for (var i in obj11) {
                arr11.push(obj11[i])
            }
            var obj12 = res.data.data[11].params.item;
            var arr12 = [];
            for (var i in obj12) {
                arr12.push(obj12[i])
            }


            this.setState({
                animating: false,
                
                refreshing: false,
                looplist: arr1,
                clearfixlist: arr2,
                articlelist: arr3,
                dllist: arr4,
                bluepic: arr5,
                bluepic2: arr6,
                bluepic3: arr7,
                bluepic4: arr8,
                bluepic5: arr9,
                goodshop: arr10,
                adimg: arr11[0].logo,
                goodslist: arr12,
            })
        })
    }


}



export default App_body;