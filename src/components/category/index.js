import React,{Component} from "react";
import MyProgress from "./jindutiao.js"
import axios from "axios";
import "./index.css"
import {NavLink } from "react-router-dom";
import {ActivityIndicator } from "antd-mobile"
class Category extends Component{
	constructor(){
		super()
		this.state={
			jindu:30,
			toplist:null,
			detaillist:[],
			allKey:[],
			lv3list:[],
			keylv3:[],
			realkeylv3:[],
			animating:true
		}
	}

	render(){
		var qqq=this.state.allKey
		
		return <div className="outside">
	{/*左侧一级导航栏！！！！！！！！！！！！！！！！！！*/}
			{
				this.state.toplist?<ul className="leftList">
				<li className="leftul" onClick={()=>{this.setState({detaillist:[]})}}>推荐分类</li>
				{this.state.toplist.data.data.data.map((item,index)=>
						<li key={item.cat_id} className="leftul" onClick={this.eventAgent.bind(this,item.cat_id)}
						>{item.cat_name}</li>
					)}
				</ul>:""
			}

		{/*煞笔推荐栏还得单独写！！！！！！！！！！！！！！！！！！*/}
			{
				this.state.detaillist.length==0&&this.state.toplist?<ul className="rightList">
				<li>推荐分类</li>
				{
						this.state.toplist.data.data.cat_rel_hot.map((item,index)=>
							<li key={item.cat_id}>{item.cat_name}<h1>请点击别的侧边栏！</h1></li>)
					}

				</ul>:""

			}

		{/*煞笔推荐栏还得单独写！！！！！！！！！！！！！！！！！！*/}
			{
				this.state.keylv3?<ul className="rightList">
				{
				this.state.detaillist.map((item,index)=>{
					var that = item
					return <li key={item[qqq[index]].cat_id}>{item[qqq[index]].cat_name}
						<ul className="innerlist">

								
								{this.state.realkeylv3[index].map(item=>{
									

									return <li key={item} className="innerli">
									<NavLink to={`/goods${that[qqq[index]].lv3[item].cat_id}`}>
									<img src={that[qqq[index]].lv3[item].cat_logo}/>
									<p>{that[qqq[index]].lv3[item].cat_name}</p></NavLink></li>
								})}
						</ul>
					</li>
					})}
				</ul>:""

			}

			<MyProgress jindu={this.state.jindu}/>
			<ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
		</div>
			
	}
	
	componentDidMount(){
				axios.get(`/index.php/topapi?method=category.itemCategory&cat_id=0&showLoading=true
			&v=v3&_rand=0.0569857370272866`).then(res=>{
				
				this.setState({
					toplist:res,
					jindu:100,
					animating:false
				})

			})
	}

	eventAgent(target){
		this.setState({
			animating:true
		})
		axios.get(`index.php/topapi?method=category.itemCategory&cat_id=
			${target}&showLoading=true&v=v3&_rand=0.4826154374713931`).then(res=>{
				
				
				    var jsonObject = res.data.data.lv2
				       var keys = [];
				    for (var p in jsonObject){
				        keys.push(p);
				    }



				var arr = []
				var keylv3 = [];
				for (var i in res.data.data.lv2) {
				    let o = {};
				    o[i] = res.data.data.lv2[i];
				    arr.push(o)
				    keylv3.push(res.data.data.lv2[i].lv3)
				}
				
				    var realkeylv3 = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
				    for (var out in keylv3){
				    	for(var q in keylv3[out]){
				    	
				        realkeylv3[out].push(q);
			
				    }}


			
				this.setState({
					detaillist:arr,
					allKey:keys,
					keylv3:keylv3,
					realkeylv3:realkeylv3,
					animating:false
				})

				

			})
	}


}

export default Category