import React, { Component } from "react"
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from "react-dom"


function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }

    render() {
        return (<div className="shopping">
     
      <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}

            refreshing={this.state.refreshing}
            onRefresh={() => {
                this.setState({
                    refreshing: true
                });
                setTimeout(() => {
                    this.setState({
                        refreshing: false
                    });
                }, 1000);
            }}
            >
        {this.state.data.map(i => (
                <div key={i} style={{
                    textAlign: 'center',
                    padding: 20
                }}>
           {i}
          </div>
            ))}
      </PullToRefresh>
    </div>);
    }
}

export default Demo