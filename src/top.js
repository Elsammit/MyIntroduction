import React, { Component } from 'react';
import "./top.css";
import WaniImg from "./image/waniImg.gif"
import MoguraImg from "./image/moguratataki.gif"
import FireWork from "./image/firework.gif"
import Pokemon from "./image/pokemon.gif"
import HatenaGame from "./image/hatena.gif"
import Cooking from "./image/cooking.gif"
import Profile from "./image/profile.png"
export default class waniwani extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            location:0,
        };
    }

    render() {
        return (<div>
            <header>
                作成アプリ紹介
            </header>
            <div className="Introduce">
                <div className="article" >
                <div className="App1">
                    <h2>わにたたき</h2>
                    <table　border="1" className="Tbl">
                        <tr>
                            <th><img className="AppImg" src={WaniImg} alt="ワニたたき画像" align="middle"/></th>
                            <th>某ゲームのワニたたき！！<br/>
                            ワニを叩くと音声も出るよｗｗ</th>
                        </tr>
                    </table>
                    <a href="https://elsammit.github.io/waniwanipanic/">https://elsammit.github.io/waniwanipanic/</a>            
                </div>
                <div　className="App1">
                    <h2>モグラたたき</h2>
                    <table　border="1" className="Tbl">
                        <tr>
                            <th><img className="AppImg" src={MoguraImg} alt="モグラたたき画像" align="middle"/></th>
                            <th>モグラたたきゲーム<br/>
                            結構上手く作れた気がする</th>
                        </tr>
                    </table>
                    <a href="https://elsammit.github.io/Moguratataki/">https://elsammit.github.io/Moguratataki/</a>                   
                </div>
                <div　className="App1">
                    <h2>花火</h2>
                        <table　border="1" className="Tbl">
                            <tr>
                                <th><img className="AppImg2" src={FireWork} alt="花火画像" align="middle"/></th>
                                <th>花火も作ってみた<br/>
                                今年はいけなかったからせめてWeb上だけでも</th>
                            </tr>
                        </table>
                    <a href="https://elsammit.github.io/Moguratataki/">https://elsammit.github.io/Moguratataki/</a>                   
                </div>
                <div　className="App1">
                    <h2>ポケモンステータス確認フォーム</h2>
                        <table　border="1" className="Tbl">
                            <tr>
                                <th><img className="AppImg3" src={Pokemon} alt="ポケモン画像" align="middle"/></th>
                                <th>ポケモンステータス確認用フォームです<br/>
                                第1世代～第7世代のステータスや努力値振りをレーダーチャートで分かりやすくしてみました</th>
                            </tr>
                        </table>
                    <a href="https://elsammit.github.io/PokeChart/">https://elsammit.github.io/PokeChart/</a>                   
                </div>
                <div　className="App1">
                    <h2>お料理ルーレットアプリ</h2>
                        <table　border="1" className="Tbl">
                            <tr>
                                <th><img className="AppImg3" src={Cooking} alt="お料理ゲーム画像" align="middle"/></th>
                                <th>本日の献立を選んでくれるアプリです。<br/>
                                ちょっと献立数が少ないかな？？</th>
                            </tr>
                        </table>
                    <a href="https://elsammit.github.io/PokeChart/">https://elsammit.github.io/PokeChart/</a>                   
                </div>
                <div　className="App1">
                    <h2>誰が出てきたか当てるゲーム</h2>
                        <table　border="1" className="Tbl">
                            <tr>
                                <th><img className="AppImg3" src={HatenaGame} alt="よくわからないゲーム画像" align="middle"/></th>
                                <th>誰が出てきたか当てるゲームです<br/>
                                ワニたたき作成している時に作ってみたゲームだけど。。。</th>
                            </tr>
                        </table>
                    <a href="https://elsammit.github.io/PokeChart/">https://elsammit.github.io/PokeChart/</a>                   
                </div>
                </div>
                <div className="aside" >
                    <div className="Profile">
                        <h2>自己紹介</h2>
                        <a>Elsammit</a><br/>
                        <img className="ProfileImg" src={Profile}/>

                        <h5>紹介文</h5>
                        <a>色々な技術やりたい系社会人です
                            ちょっと手を広げすぎて全て中途半端になっちゃってます😅
                            最近はWebと機械学習について勉強中！！
                            Kaggleコンペに参加出来るように頑張るぞ👍

                            ちょくちょく技術ブログも掲載しているのでそちらもよろしくです😆
                        </a>
                        <h5>リンク</h5>
                        <ul>
                            <li>
                                <a href="https://elsammit-beginnerblg.hatenablog.com/">技術ブログ<br/>
                                    https://elsammit-beginnerblg.hatenablog.com/</a><br/>
                            </li>
                            <li>
                                <a href="https://twitter.com/6032ypmzttk">ツイッター<br/>
                                    https://twitter.com/6032ypmzttk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <div className="Footer">
                   <a className="Footer_moji"> 紹介ページ</a>
                </div>
            </footer>
        </div>);
    }
  }