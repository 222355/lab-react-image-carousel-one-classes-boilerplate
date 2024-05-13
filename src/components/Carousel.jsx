import React, { Component } from "react";
import "./Carousel.css";
import {images} from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            index:0,
        };
    }
  render(){
    const {index}=this.state
    const nextSlide=()=>{
        this.setState((prevState)=>({
            index: prevState.index=== images.length-1?0: prevState.index + 1,
        }))
    }
    const prevSlide=()=>{
        this.setState((prevState)=>({
            index:prevState.index===0?images.length-1:prevState.index-1,
        }))
    }
    return(
        <React.Fragment>
        <div className="carousel">
            <div className="arrow" onClick={prevSlide}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>
            <div className="face-container" style={{backgroundImage:`url(${images[this.state.index].img})`}}>
                <h1>{images[this.state.index].title}</h1>
                <p>{images[this.state.index].subtitle}</p>
            </div>
            <div className="arrow" onClick={nextSlide}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </div>

        </div>
        </React.Fragment>
    );
  }
}


export default Carousel;