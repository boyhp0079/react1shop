import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.img`
    width: 100%;
    height: 100%;
    object-fit:contain;
`;
export default function Slide({src}) {
    return (
        <Wrapper src={src} alt="slide-img" />
    )
}
