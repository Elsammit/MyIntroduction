import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Top from './top';
import Main from './mainpage'
import "./mainpage.css";
import Profile from './profile'
class library extends Component  {
    render() {
        return (<div>
            <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/MakeGame' component={Top} />
                    <Route path='/Profile' component={Profile} />
                </Switch>
            </BrowserRouter>
           
        </div>);
    }
  }

  export default library;