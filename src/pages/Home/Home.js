import React, {Component} from "react";
import HomeSearch from "./HomeSearch";
import HomeTopBanner from "./HomeTopBanner";
import axios from "axios";


class Home extends Component {
    constructor() {
           super();   
   }
   state={
     topBanner:[]
   }
   async componentDidMount() {
    let { data: { data } }= await axios.get("https://www.easy-mock.com/mock/5d10438f89bf1d4343af4e31/yxk/homedata")
    let topBanner = data.flash;
    console.log(topBanner);
   }


  render() {
    return (
      <div className="mIndex">
        <div className="mIndexBanner">
        <HomeSearch/>
        <HomeTopBanner/>
        </div>
      </div>
    )
  }
}
export default Home;