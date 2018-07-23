import React, { Component } from "react"
import "./index.css"
class Navbar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="common-header">
		<div className="max-head">
			<div className="max-left-icon" onClick={() => {
                this.props.myevent();
            }}>
				<a>沙河口区<span className="iconfont icon-xiangxiajiantou"></span></a>
				
			</div>
			<div className="text">
				<form method="post">
					<div className="search">
						<a className="search-in key">搜索商品</a>
						{ /*<span className="iconfont icon-sousuo"></span>*/ }

					 <span className="iconfont icon-saoyisao"></span>
					</div>
				</form>
			</div>
			<div className="max-right-icon">
			<span className="iconfont icon-wodefankui"></span>
				<a>消息</a>
			</div>

		</div>
			
	</div>

        )
    }
}

export default Navbar;