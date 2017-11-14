import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './css/details.css';

class Details extends Component {
    constructor () {
        super();
    }
    componentDidMount(){

    /*
        $(function(){

            $('.left_bottom>li').click(function() {
                $(this).css('background','#108EE9').css('color','#fff').siblings().css('background','').css('color','');
                var i = $(this).index();//下标第一种写法
                //var i = $('tit').index(this);//下标第二种写法
                // $(this).addClass('active').siblings().removeClass('active');
                $('.content>li').eq(i).show().siblings().hide();
                $('.pic>li').eq(i).show().siblings().hide();

            });
        });

    */}


    render(){
      //URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取
      //this.props.params
        console.log(this.props.match.params.uniquekey)
        return (
            <Router>
           <div>
               <div className="wrap_case">
                   <div className="box_case">
                      {/*左侧*/}
                       <div className="left">
                           <ul className="left_top">
                               <li>患者信息</li>
                               <li>病案号：123</li>
                               <li>姓名：张三 性别：女</li>
                               <li>位置:乳腺</li>
                           </ul>

                           <ul className="left_bottom">
                               <li>切片1</li>
                               <li>切片2</li>
                               <li>切片3</li>
                               <li>切片4</li>
                               <li>切片5</li>
                               <li>切片6</li>
                               <li>切片7</li>
                           </ul>
                       </div>
                       {/*中间*/}
                       <div className="main">
                           <ul className="content">
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>6</li>
                               <li>7</li>
                           </ul>
                       </div>
                       {/*右侧*/}
                       <div className="right">
                           <div className="right_top">
                               <button>ROI</button>
                               <button>MAP</button>
                               <ul className="pic">
                                   <li>1</li>
                                   <li>2</li>
                                   <li>3</li>
                                   <li>4</li>
                                   <li>5</li>
                                   <li>6</li>
                                   <li>7</li>
                               </ul>
                           </div>
                           <div className="right_bottom">
                               <ul>
                                   <li>辅助诊断结论：</li>
                                   <li>切片结果：良性</li>
                                   <li>患者结果：良性</li>
                               </ul>
                               <ul>
                                   <li>医生诊断结论：</li>
                                   <li>切片结果：<input type="text"/></li>
                                   <li>患者结果：<input type="text"/></li>
                               </ul>
                               <button className="report"><Link to="/Case/Report">生成报告</Link></button>
                               <button className="result">保存结果</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            </Router>
        );
    }
}

    export default Details;

