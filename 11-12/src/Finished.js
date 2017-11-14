import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ComponentHeader from './Header';
import "./css/header.css";

//已处理
class Header extends Component{
	constructor () {
        super();
        this.state={
        	ischeck:false
        }
    }
	checkedActive(){
		this.setState({
			ischeck: !this.state.ischeck
		});
	}
	render(){
		//选中状态
		var styleComponent={
			check:{
				background:(this.state.ischeck)?"#018fd9":"#fff",
				color:(this.state.ischeck)?"#fff":"#333"
			}
		};
		//打开关闭
		var lsit_info=this.state.ischeck
		?<button className="lsit_info"><Link to={"/Details"}>打开</Link></button>
		:<button className="lsit_info">关闭</button>
		return(
			<div>
				<ComponentHeader />
				<div className="main">
					<div className="tb_list_con">
						<table className="tb_list">
							<colgroup>
								<col width="88px" />
								<col width="90px" />
								<col width="90px" />
								<col width="135px" />
								<col width="215px" />
								<col width="135px" />
								<col width="215px" />
							</colgroup>
							<thead>
							<tr>
								<th>病案号</th>
								<th>病理号</th>
								<th>位置</th>
								<th>姓名</th>
								<th>性别</th>
								<th>年龄</th>
								<th>接收时间</th>
								</tr>
							</thead>
							<tbody>
								<tr style={styleComponent.check} onClick={this.checkedActive.bind(this)}>
									<td>567</td>
									<td>567</td>
									<td>乳腺</td>
									<td>张三</td>
									<td>女</td>
									<td>41</td>
									<td>2017年3月2日</td>
								</tr>
								<tr>
									<td>567</td>
									<td>567</td>
									<td>乳腺</td>
									<td>张三</td>
									<td>女</td>
									<td>41</td>
									<td>2017年3月2日</td>
								</tr>
							</tbody>
						</table>
						<div className="tb_list_bottom">
							<button className="list_count">统计</button>
							{lsit_info}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
