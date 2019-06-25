import React, {Component} from "react";
import "./home.css"
class HomeSearch extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mIndexBanner__header">
        <div className="header__location">
          <span>广州</span>
          <i></i>
        </div>
        <div className="header__search">
          <i className="search__button"></i>
          <input
            readOnly="readonly"
            placeholder="毕业旅行推荐"
            type="search"
            autoComplete="off"
            className="search__input"/></div>
        <div className="header__button"></div>
      </div>
    )
  }
}

export default HomeSearch;