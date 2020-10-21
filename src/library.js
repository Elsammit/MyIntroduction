import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Top from './top';
import Main from './mainpage'
import "./mainpage.css";
import Profile from './profile'
export default class waniwani extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            location:0,
        };
    }

    render() {
        return (<div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/MakeGame' component={Top} />
                    <Route path='/Profile' component={Profile} />
                </div>
            </BrowserRouter>
           
        </div>);
    }
  }