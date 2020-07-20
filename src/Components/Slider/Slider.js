import React,{useState} from 'react'
import './sliderStyle.css'
import Slide from './Slide'
import Dot from './Dot'
export default function Slider() {
    let SliderArr = [
    <Slide src={process.env.PUBLIC_URL+"cool.jpg"}/>,
    <Slide src={process.env.PUBLIC_URL+"items/untitled-1.png"}/>,
    <Slide src={process.env.PUBLIC_URL+"items/untitled-1.png"}/>,
]
    const [x,setx] = useState(0);
    const goLeft=()=>{
        x=== 0? setx(-100*(SliderArr.length-1)) : setx(x+100)
        console.log(x/100);
    }
    const goRight=()=>{
        x=== -100*(SliderArr.length-1)?setx(0) : setx(x-100)
    }
    const setSlide = active=>{
        setx(-100*active)
    }
    return (
        <div className="slider">
            {
                SliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button className="slide-arrow" id="arrow-left" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
            <button className="slide-arrow" id="arrow-right" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
            <Dot SliderArr ={SliderArr} setSlide={setSlide} active={-x/100}/>
        </div>
    )
}
