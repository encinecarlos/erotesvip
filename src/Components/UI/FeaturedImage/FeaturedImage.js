import React from 'react';
import styled from 'styled-components';

const DivImage = styled.div`
    background: url(${props => props.photo}) right no-repeat;                       
    background-size: 75vh 100%;
    background-position-x: right;        
    width: 100vw;
    height: 100vh;                
`;

const FeaturedImage = (props) => (
    <DivImage photo={props.photo}>
        {props.children}
    </DivImage>
);

export default FeaturedImage;
