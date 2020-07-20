import React from 'react'
import styled from 'styled-components'
const DotWrapper = styled.div`
    position: absolute;
    z-index: 50;
    left: 50%;
    bottom: 0;
span{
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    postion:absolute;
    right:5px;
}
`

export default function Dot({active,SliderArr,setSlide}) {
    function handleOnclick(index){
        setSlide(index)
    }
    return (
        <DotWrapper>
           { SliderArr.map((x,index)=> (<span key={index} onClick={()=>handleOnclick(index)} style={{backgroundColor: active === index ? 'black' :'white'}}></span>)) }
        </DotWrapper>
    )
    }
