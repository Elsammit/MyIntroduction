import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./profile.css";
import profile from "./image/profile.jpg";
export default class waniwani extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            location:0,
        };
    }

    render() {
        return (<div>
                <body>
                    <div className="ProfTitle">
                        <p>プロフィール</p>
                    </div>
                    <img src={profile} className="Profile-Pro" />
                </body>
        </div>);
    }
  }