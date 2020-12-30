import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Top from './top';
import Main from './mainpage'
import "./mainpage.css";
import Profile from './profile'
class library extends Component  {
    render() {
        const meta = {
            title: 'Elsammitの部屋',
            description: 'Elsammitの自己紹介ぺージ。今まで作成したアプリや技術、経歴等を掲載しています。',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'react,meta,document,html,tags'
              }
            }
          };
        return (<div>
            <DocumentMeta {...meta}>
                <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/MakeGame' component={Top} />
                        <Route path='/Profile' component={Profile} />
                    </Switch>
                </BrowserRouter>
            </DocumentMeta>
        </div>);
    }
  }

  export default library;