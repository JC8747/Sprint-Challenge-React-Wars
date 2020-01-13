import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    width: 300px;
    max-height: 30rem;
    background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(207,224,227,1) 100%);
    margin: 20px;
    border-radius: 10px;
    font-family: 'Raleway', sans-serif;
`;

const Name = styled.h2`
background: rgb(171,171,171);
background: linear-gradient(0deg, rgba(171,171,171,1) 0%, rgba(79,79,79,1) 100%);
    width: 100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content: center;
    margin: 0px;
    border-radius: 10px 10px 0px 0px;
    color: white;

`;



const PeopleCard = (props) => {
    return(
        <>
            <Card className = 'personCard'>
                <Name>{props.name}</Name>
                <p>Height: {props.height}"</p>
                <p>Weight: {props.mass}lbs</p>
                <p>Hair color: {props.hairColor}</p>
                <p>Skin color: {props.skinColor}</p>
            </Card>
        </>
    )
}
export default PeopleCard;