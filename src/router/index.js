import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React from "react"
import APP from "../App"
import Home from "../components/home"
import Sidebar from "../components/common/sidebar"

import Category from "../components/category"
import ShoppingCar from "../components/shoppingCar"
import GoodsList from "../components/category/goodslist"
import Goodsdetail from "../components/category/goodslist/goodsdetail"

var auth = {
    isAuth: false
}

const router = (
<Router>
		<APP>
		<Switch>

			<Route path="/home" component={Home}/>
			<Route path="/shoppingCar" component={ShoppingCar}/>
			<Route path="/sidebar" component={Sidebar}/>
			<Route path="/category" render={() => <Category/>
}/>
			<Route path="/goods:id" component={GoodsList}/>
			<Route path="/gdetail:ids" component={Goodsdetail}/>
			<Redirect from="*" to="/home"/>
		</Switch>
		</APP>
	</Router>

)

export default router