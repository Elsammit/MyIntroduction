import React, { Component } from 'react';
import "./top.css";
import WaniImg from "./image/waniImg.gif"
import MoguraImg from "./image/moguratataki.gif"
import FireWork from "./image/firework.gif"
import Pokemon from "./image/pokemon.gif"
import HatenaGame from "./image/hatena.gif"
import Cooking from "./image/cooking.gif"
import WordApp from "./image/wordApp.gif"
import Profile from "./image/profile.png"
export default class TopPage extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            location:0,
        };
        //this.test = this.onChange.bind(this);
    }

    Header = () =>{
        return(
            <header>
                作成アプリ紹介
            </header>
        )
    }

    MakeAppView = (Title, Message, Img, Alt_img, Url, AppClass) =>{
        return(
            <div className="App1">
                <h2>{Title}</h2>
                <table　border="1" className="Tbl">
                    <tr>
                        <th><img className={AppClass} src={Img} alt={Alt_img} align="middle"/></th>
                        <th>{Message}</th>
                    </tr>
                </table>
                <a href={Url}>{Url}</a>            
            </div>
        )
    }

    AsidePage = () =>{
        return(
            <div className="Profile">
                <h2>自己紹介</h2>
                <a>Elsammit</a><br/>
                <img className="ProfileImg" src={Profile} alt="プロフィール画像"/>

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
        )
    }

    test = (e) =>{
        console.log(e)
        var sample = document.getElementById("tt");
        console.log('text = ' + sample.value);
    }

    ReactAppPage = () =>{
        return(
        <div className="article" >
            {this.MakeAppView("わにたたき", "某ゲームのワニたたき！！ワニを叩くと音声も出るよｗｗ", WaniImg, 
                        "ワニたたき画像", "https://elsammit.github.io/waniwanipanic/", "AppImg")}
            {this.MakeAppView("モグラたたき", "モグラたたきゲーム<br/>結構上手く作れた気がする", MoguraImg, 
                        "モグラたたき画像", "https://elsammit.github.io/Moguratataki/", "AppImg")}
            {this.MakeAppView("花火", "花火も作ってみた<br/>今年はいけなかったからせめてWeb上だけでも", FireWork, 
                        "花火画像", "https://elsammit.github.io/Fireworks/", "AppImg2")}
            {this.MakeAppView("ポケモンステータス確認フォーム", "ポケモンステータス確認用フォームです。\n 第1世代～第7世代のステータスや努力値振りをレーダーチャートで分かりやすくしてみました", Pokemon, 
                        "ポケモン画像", "https://elsammit.github.io/PokeChart/", "AppImg2")}                               
            {this.MakeAppView("お料理ルーレットアプリ", "本日の献立を選んでくれるアプリです。\nちょっと献立数が少ないかな？？", Cooking, 
                        "お料理ゲーム画像", "https://elsammit.github.io/CookingApp/", "AppImg3")}     
            {this.MakeAppView("誰が出てきたか当てるゲーム", "誰が出てきたか当てるゲームです\nワニたたき作成している時に作ってみたゲームだけど。。。</th>", HatenaGame, 
                        "よくわからないゲーム画像", "https://elsammit.github.io/hitSomeone/", "AppImg3")}  
            {this.MakeAppView("英単語アプリ", "単語を勉強するためのアプリ\n単語の追加変更欄も追加しているので集中的な勉強も出来ます！！", WordApp, 
                        "英単語画像", "https://elsammit.github.io/wordbookApp/", "AppImg2")}  
        </div>
        )
    }

    render() {
        return (<div>
            {this.Header()}
            <div className="Introduce">
                <div className="leftaside" >
                <select name="blood" id="tt" onChange={this.test}>
                    <option value="Aries">おひつじ座</option>  
                    <option value="Taurus">おうし座</option>
                    <option value="Gemini">ふたご座</option>
                    <option value="Cancer">かに座</option>
                    <option value="Leo">しし座</option>
                    <option value="Virgo">おとめ座</option>
                    <option value="Libra">てんびん座</option>
                    <option value="Scorpio">さそり座</option>
                    <option value="Saggitarius">いて座</option>
                    <option value="Capricorn">やぎ座</option>
                    <option value="Aquarius">みずがめ座</option>
                    <option value="Pisces">うお座</option>
                    </select>
                </div>
                {this.ReactAppPage()}
                <div className="aside" >
                    {this.AsidePage()}
                </div>
            </div>
            <footer>
                <div className="Footer">
                   <a className="Footer_moji">紹介ページ</a>
                </div>
            </footer>
        </div>);
    }
  }