import React from 'react'
import styled from 'styled-components'


const Gifwrapper = styled.div`
.static {
    position:absolute;
    background: white;
  }
  
  .static:hover {
    opacity:0;
  }
  display: inline-block;
  position: relative;
  left: 50%;
`
export default function About() {
    return (
        <Gifwrapper>
            <h1 style={{textAlign:"center"}}>About</h1>
            <img class="static" src="https://lh4.googleusercontent.com/-gZiu96oTuu4/Uag5oWLQHfI/AAAAAAAABSE/pl1W8n91hH0/w140-h165-no/Homer-Static.png"/>
            <img class="active" src="https://lh4.googleusercontent.com/i1RprwcvxhbN2TAMunNxS4RiNVT0DvlD9FNQCvPFuJ0=w140-h165-no"/>
        </Gifwrapper>
    )
}
