import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import React,{Component} from "react";
import axios from "axios"
const data = [
  {
    value: '1',
    label: '综合',
  }, {
    value: '2',
    label: '新品',
  },
  {
    value: '3',
    label: '评分',
    isLeaf: true,
  },
];

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    this.setState({
      show: !this.state.show,
    });
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });


    switch (label){
      case "综合":
      
      axios.get(`http://www.yijiago.com/index.php/topapi?
        method=item.listGoods&app_area=province:210000%7C
        province_name:%E8%BE%BD%E5%AE%81%E7%9C%81%7Ccity:
        210200%7Ccity_name:%E5%A4%A7%E8%BF%9E%E5%B8%82%7C
        area:210204%7Carea_name:%E6%B2%99%E6%B2%B3%E5%8F%
        A3%E5%8C%BA%7Cstreet:900865%7Cstreet_name:%E8%BE%
        96%E5%8C%BA%E5%86%85&cat_id=${this.props.thingsid}&page_no=1&page_si
        ze=8&v=v3&_rand=0.8464785457583697&orderBy=zonghe
        +desc&prop_id=`).then(res=>{this.props.getres(res)})

      break;
         case "新品":
            axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:210000%7Cprovince_name:%E8%BE%BD%E5%AE%81%E7%9C%81%7Ccity:210200%7Ccity_name:%E5%A4%A7%E8%BF%9E%E5%B8%82%7Carea:210204%7Carea_name:%E6%B2%99%E6%B2%B3%E5%8F%A3%E5%8C%BA%7Cstreet:900865%7Cstreet_name:%E8%BE%96%E5%8C%BA%E5%86%85&cat_id=${this.props.thingsid}&page_no=1&page_size=8&v=v3&_rand=0.4898253235560004&orderBy=modified_time+desc&prop_id=`)
            .then(res=>{this.props.getres(res)})
      break;

         case "评分":
            axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:210000%7Cprovince_name:%E8%BE%BD%E5%AE%81%E7%9C%81%7Ccity:2102
              00%7Ccity_name:%E5%A4%A7%E8%BF%9E%E5%B8%82%
              7Carea:210204%7Carea_name:%E6%B2%99%E6%B2%B
              3%E5%8F%A3%E5%8C%BA%7Cstreet:900865%7Cstree
              t_name:%E8%BE%96%E5%8C%BA%E5%86%85&cat_id=
              ${this.props.thingsid}&page_no=1&page_size=8&v=v3&_rand=0.014
              686339753978261&orderBy=comprehensive+desc&
              prop_id=`).then(res=>{this.props.getres(res)})
      break;
    }
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'fixed', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''} style={{ position: 'fixed',width:'100%',height:'46px',zIndex:2,top:"45px"}}>
        <div>
          <NavBar
            leftContent="请点我排序\/"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"

          >
           排序方式
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}
export default MenuExample