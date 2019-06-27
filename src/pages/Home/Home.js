import React, {Component} from "react";
import HomeSearch from "./HomeSearch";
import HomeTopBanner from "./HomeTopBanner";
import HomeMainNav from "./HomeMainNav";
import HomeSecondNav from "./HomeSecondNav";
import HomeRaiders from "./HomeRaiders";
import HomeRecommend from "./HomeRecommend";
import HomeTimelimit from "./HomeTimelimit";
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
    sale:[]
   }
   async componentWillMount() {
    let { data: { data } }= await axios.get("https://www.easy-mock.com/mock/5d10438f89bf1d4343af4e31/yxk/homedata")
    let navs = data.navs;
    let lb2 = data.first_ad;
    let sale = data.sale;
    this.setState(
      {
        navs,
        lb2,
        sale
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
      </div>
    )
  }
}
export default Home;