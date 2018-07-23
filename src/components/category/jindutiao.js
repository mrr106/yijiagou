import { Progress, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import React,{Component} from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import 'antd-mobile/dist/antd-mobile.css';
class MyProgress extends React.Component {
  state = {
    percent: this.props.jindu,
  };

  render() {
    const { percent } = this.state;
    return (
      

      <div className="progress-container">
        <div className="show-info">
          <div className="progress"><Progress percent={this.props.jindu} position="normal" /></div>
        </div>
      </div>

    
    );
  }
  componentWillMount(){
    console.log(this.props.jindu)


    if (this.state.percent >= 100) {
      document.getElementsByClassName(".progress-container").style.display= "none"
      console.log(11111)
    }

  
  }
}



export default MyProgress