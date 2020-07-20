import React from 'react'
import styled from 'styled-components'
const FooterStyle = styled.div`
    width: 100vw;
    display: block;
    overflow: hidden;
    padding:70px 0;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
.inner-footer{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
}
`
export default function SimFooter() {
    return (
        <FooterStyle>
            <div className="inner-footer">
                <h2>Logo</h2>
                <h3>@boyhp</h3>
            </div>
        </FooterStyle>
    )
}
