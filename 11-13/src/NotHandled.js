import React,{Component} from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ComponentHeader from './Header';
import "./css/header.css";
import DataList from './data.json'

//待处理
class Header extends Component{
	constructor () {
        super();
        this.state={
        	// ischeck:false,
        	newsId:'',
        	DataList:''  //存数据
        }
    }
	checkedActive(e){

		var Index = e.currentTarget.getAttribute('data-key');
		var Indexcheck = e.currentTarget.getAttribute('data-check');
		var dataId=e.currentTarget.getAttribute('data-id');
		$("tr").not(Index).attr({"data-check":false,"class":""});
		if(Indexcheck=="true"){
			e.currentTarget.setAttribute('data-check',false);
			e.currentTarget.setAttribute('class',"");
			this.setState({newsId:"" });
		}else{
			e.currentTarget.setAttribute('data-check',true);
			e.currentTarget.setAttribute('class',"active");
			this.setState({newsId:dataId });
		}
		/*this.setState({
			ischeck: !this.state.ischeck
		});*/
	}
	// 数据
	componentDidMount() {
		this.setState({DataList: DataList})
	};	
	
	render(){
		//打开关闭
		//console.log(this.state.newsId)
		var lsit_info=this.state.newsId!=""
		?<button className="lsit_info"><Link to={`/Details/${this.state.newsId}`}>打开</Link></button>
		:<button className="lsit_info">关闭</button>

		//数据
		var DataList = this.state.DataList;
		var newsList = DataList.length
			? DataList.map((newsItem, index) => (
				<tr key={index} data-key={index} data-check="false" data-id={newsItem.id} onClick={this.checkedActive.bind(this)}>
					<td>{newsItem.binganhao}</td>
					<td>{newsItem.binglihao}</td>
					<td>{newsItem.position}</td>
					<td>{newsItem.name}</td>
					<td>{newsItem.sex}</td>
					<td>{newsItem.age}</td>
					<td>{newsItem.time}</td>
				</tr>
			))
			: '没有加载到任何新闻';
		
		return(
			<div>
				<ComponentHeader />
				<div className="main">
					<div className="tb_list_con">
						<table className="tb_list" cellSpacing="" cellPadding="">
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
								{newsList}
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
