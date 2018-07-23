import React, { Component } from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'
class Foot extends Component {

    render() {
        return (
            <div id="footer">
				<aside className="footeraside">

					<ul>
					 <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
					 <li><NavLink to="/category" activeClassName="active">分类</NavLink></li>
					 <li><NavLink to="/shoppingCar" activeClassName="active">购物车</NavLink></li>
					 <li><NavLink to="/sidebar" activeClassName="active">我的易家</NavLink></li>
					
					</ul>
				</aside>
			</div>
        )
    }
}


export default Foot