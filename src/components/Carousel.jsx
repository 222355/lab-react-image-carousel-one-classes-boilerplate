import React, { Component } from "react";
import "./Carousel.css";
import { title } from "../data/CarouselData";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            index:0,
            title,
        };

    }
  render(){
    const {index}=this.state
    const currentImg=images[index]
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
        <>
        <div className="carousel">
            <div className="arrow" onClick={prevSlide}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>
            <div className="heading">
                <h1>{title}</h1>

            </div>
            <img src={currentImg} alt="carousel"/>
            <div className="arrow" onClick={nextSlide}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </div>

        </div>
        </>
    );
  }
}

export default Carousel;