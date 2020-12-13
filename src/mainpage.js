import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./mainpage.css";
export default class waniwani extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            location:0,
        };
    }

    render() {
        return (<div>
                <body className="MainBack">
                    <div className="Title">
                        <p>メインページだよ</p>
                    </div>
                        <div className="SelectButton">
                            <button className="SubButton">
                                <Link to='/MakeGame'>作成アプリ紹介ページへ</Link>
                            </button>
                            <button className="SubButton">
                                <Link to='/Profile'>プロフィール</Link>
                            </button>
                        </div>
                </body>
        </div>);
    }
  }