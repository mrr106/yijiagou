import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/common/navbar"
import Footer from "./components/common/footer"
import Sidebar from "./components/common/sidebar"
// import Home from "./component/home"
class App extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
        }
    }
    render() {
        return (
            <div className="App hei">
                <Navbar myevent={() => {
                this.setState({
                    isShow: !this.state.isShow
                })
            }}></Navbar>
           
                <Sidebar myshow= {this.state.isShow} myevent={() => {
                this.setState({
                    isShow: false
                })
            }}/>
                {this.props.children}
           		
            
            
                <Footer></Footer>
        </div>
        );
    }
}

export default App;
