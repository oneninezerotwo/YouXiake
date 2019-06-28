import React, { Component } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
import './Youcarousel.css'
import carousel3 from "../../img/carousel3.jpeg" 
import carousel4 from "../../img/carousel4.jpeg" 
import carousel1 from "../../img/carousel1.jpeg" 
import carousel2 from "../../img/carousel2.jpeg" 
import carousel5 from "../../img/carousel5.jpeg" 

class Ycarousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
          listurl:[{
              imgurl:carousel3
          },
          {
              imgurl:carousel4
          },{
              imgurl:carousel2
          },{
              imgurl:carousel1
          },{
              imgurl:carousel5
          }
          ],
        getTitile:[]

      }
  }
    render() {
        
        return (  <div className="carousel"><Carousel autoplay>
        {
            this.state.listurl.map((item, index)=>{
                return (<div key={index}>
                <h3>
                  <img src={item.imgurl}/>
                  <div className="title">
                      <p>{this.state.getTitile[index]}</p>)
                  </div>
                  
                </h3>
            </div>)
            }) 
        }
        </Carousel> 
        {/* <div className="title" >
             { this.state.getTitile.map((item, index)=>{
                return (<div key={index}>{item.title}</div>)
                })
                }
         </div> */}
         </div>
         
        )
    }
    componentDidMount() {
       
    axios.get('https://bbs.youxiake.com/api/home/articleList',{params:{
                type:1,
                page:2,
                iPageSize:10}
               } ).then(res => {
                   let data =res.data.data.articles;
                //    console.log(getTitile.title)
                let getTitile=data.map((item,index)=>{
                    return item.title
                });
                   console.log(getTitile[1])               
                 this.setState({ getTitile });
      })

    }
}
export default Ycarousel;
