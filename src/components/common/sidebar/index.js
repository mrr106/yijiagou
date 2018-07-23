import React, { Component } from "react"; //为了一会继承
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import "./index.css"

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            myshow: true
        }
    }
    render() {
        return (
            <div>
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                
                

{
            this.props.myshow ?
                <aside className="sidebaraside">

                    <div className="sidebardiv" onClick={() => {
                    this.props.myevent();
                }}>
                    <h4><span className="iconfont icon-xiangzuojiantou"></span>地址选择</h4>
                    
                    </div>
                </aside>
                : null
            }
               
            

            </ReactCSSTransitionGroup>
            </div>
        )
    }
}


export default Sidebar


