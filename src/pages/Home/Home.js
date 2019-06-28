import React, {Component} from "react";
import HomeSearch from "./HomeSearch";
import HomeTopBanner from "./HomeTopBanner";
import HomeMainNav from "./HomeMainNav";
import HomeSecondNav from "./HomeSecondNav";
import HomeRaiders from "./HomeRaiders";
import HomeRecommend from "./HomeRecommend";
import HomeTimelimit from "./HomeTimelimit";
import HomeLocal from "./HomeLocal";
import HomeClassified from "./HomeClassified";
import HomeSport from "./HomeSport";
import HomeGlobal from "./HomeGlobal";
import HomeTheme from "./HomeTheme";
import HomeHero from "./HomeHero";
import Footcom from "../../components/footer/Footcom"


import axios from "axios";
import "./home.css"



class Home extends Component {
    constructor() {
           super();   
   }
   state={
    //  topBanner:[]
    navs:[],
    lb2:[],
    sale:[],
    local_ad:{},
    local:[],
    local_banner:[],
    classified:[],
    race:[],
    photo_mdd:{},
    theme:[],
    post:[]
   }
   async componentWillMount() {
    let { data: { data } }= await axios.get("https://www.easy-mock.com/mock/5d10438f89bf1d4343af4e31/yxk/homedata")
    let navs = data.navs;
    let lb2 = data.first_ad;
    let sale = data.sale;
    let local_ad = data.local_ad;
    let local = data.local_ad.data;
    let local_banner=data.local_ad.banner;
    let classified=data.classified;
    let race=data.race;
    let photo_mdd=data.photo_mdd;
    let theme=data.theme;
    let post=data.post;

    this.setState(
      {
        navs,
        lb2,
        sale,
        local_ad,
        local,
        local_banner,
        classified,
        race,
        photo_mdd,
        theme,
        post
      })
   }


  render() {
    return (
      <div className="mIndex">
        <div className="mIndexBanner" >
          <HomeTopBanner/>
          <HomeSearch/>
        </div>
        <HomeMainNav data={this.state.navs}/>
        <HomeSecondNav/>
        <HomeRaiders/>
        <HomeRecommend data={this.state.lb2}/>
        <HomeTimelimit data={this.state.sale}/>
        <HomeLocal local_ad={this.state.local_ad} local={this.state.local} local_banner={this.state.local_banner}/>
        <HomeClassified data={this.state.classified[0]}/>
        <HomeClassified data={this.state.classified[1]}/>
        <HomeClassified data={this.state.classified[2]}/>
        <HomeSport data={this.state.race.data}/>
        <HomeGlobal data={this.state.photo_mdd.data} banner={this.state.photo_mdd.banner}/>
        <HomeTheme data={this.state.theme.data}/>
        <HomeHero data={this.state.post}/>
        <Footcom/>
      </div>
    )
  }
}
export default Home;