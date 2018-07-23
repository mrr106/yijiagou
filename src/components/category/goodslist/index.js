import React,{Component} from "react";
import axios from "axios";
import "./index.css"
import MenuExample from "./menu.js"
import {NavLink } from "react-router-dom";
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import {ActivityIndicator } from "antd-mobile"
class goodsList extends Component{
	constructor(){
		super()
		this.state={
			lists:null,
			refreshing: false,
			down: false,
			height: document.documentElement.clientHeight,
			data: [],
			animating:true,
			indexs:2,
			listsinner:null
		}
	}
	render(){

		return <ul className="listsul">
					<ActivityIndicator
		                toast
		                text="Loading..."
		                animating={this.state.animating}
		              />
		<MenuExample thingsid={this.props.match.params.id} getres={res=>{

			this.setState({
				listsinner:res.data.data.itemList
			})
		}}/>
		<PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
        
        	axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:210000%7Cprovince_name:%E8%BE%BD%E5%AE%81%E7%9C%81%7Ccity:210200%7Ccity_name:%E5%A4%A7%E8%BF%9E%E5%B8%82%7Carea:210204%7Carea_name:%E6%B2%99%E6%B2%B3%E5%8F%A3%E5%8C%BA%7Cstreet:900865%7Cstreet_name:%E8%BE%96%E5%8C%BA%E5%86%85&cat_id=${this.props.match.params.id}&page_no=${this.state.indexs}&page_size=8&v=v3&_rand=0.021205569286461667`).then(res=>{
        			var index1=this.state.indexs
        			index1++
        			this.setState({
        				indexs:index1
        			})
        			var arr1 = [...this.state.listsinner]
        			res.data.data.itemList.map(item=>{return arr1.push(item)})
        			console.log(res.data.data.itemList)
        			this.setState({
        				listsinner:arr1
        			})
        		})


          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >

		
		{
			this.state.listsinner?
			this.state.listsinner.map((item,index)=>
				
				<li className="listsli" key={item.item_id}>
				<NavLink to={`/gdetail${item.item_id}`}>
				<img src={item.image_default_id}/>
				<h4>{item.title}</h4>
				<p style={{marginTop : '40px'}}> ￥{item.price}</p>
				</NavLink></li>
				)
			:""
		}
		  </PullToRefresh>
		</ul>
		
	}
	componentWillMount(){

		axios.get(`/index.php/topapi?method=item.listGoods&
			app_area=province:210000%7Cprovince_name:%E8%BE
			%BD%E5%AE%81%E7%9C%81%7Ccity:210200%7Ccity_name
			:%E5%A4%A7%E8%BF%9E%E5%B8%82%7Carea:210204%7Car
			ea_name:%E6%B2%99%E6%B2%B3%E5%8F%A3%E5%8C%BA%7C
			street:900865%7Cstreet_name:%E8%BE%96%E5%8C%BA%
			E5%86%85&cat_id=${this.props.match.params.id}&page_no=1&page_size=8&v=v3&
			_rand=0.20710706826562753`).then(res=>{
			const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
			setTimeout(() => this.setState({
			  height: hei,
			}), 0);
				this.setState({
					lists:res,
					animating:false,
					listsinner:res.data.data.itemList
				})
			})
		localStorage.setItem("id",this.props.match.params.id);
		
	}
}

export default goodsList