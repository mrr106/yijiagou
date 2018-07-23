import React,{Component} from "react";
import axios from "axios";
import "./index.css"
import {NavLink } from "react-router-dom";
import {ActivityIndicator } from "antd-mobile"
class Goodsdetail extends Component{
	constructor(){
		super()
		this.state={
			lists:null,
			animating:true
		}
	}
	render(){
		
		return (<div className="gdetail">
						<ActivityIndicator
			                toast
			                text="Loading..."
			                animating={this.state.animating}
			              />
		{
				this.state.lists?
				<div>
				<span style={{fontSize:"50px"}} onClick={this.handleClick.bind(this)}>{"<"}</span>
				<img src={this.state.lists.data.data.item.image_default_id}/>
				<p>{this.state.lists.data.data.item.title}</p>
				<h3>￥{this.state.lists.data.data.item.activity_price}</h3>
				<p>剩余{this.state.lists.data.data.item.realStore}件</p>
				</div>
				:""
		}
		</div>	)
	}
	componentDidMount(){

				axios.get(`/index.php/topapi?method=item.detail&item_id=${this.props.match.params.ids}
					&showLoading=true&longitude=121.59347778&latitude=38.948
					70994&v=v3&_rand=0.8465574967590801`).then(res=>{
				
					this.setState({
						lists:res,
						animating:false
					})
				})

			
	}
	handleClick(){
		this.props.history.push(`/goods${localStorage.getItem("id")}`);
	}
}
export default Goodsdetail