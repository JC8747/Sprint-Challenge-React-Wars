import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
 display:flex;
 flex-wrap: wrap;
 flex-direction: row;
 justify-content: center;
 @import url('https://fonts.googleapis.com/css?family=Raleway:500&display=swap');
`;

const PeopleList =() => {

    const [people, setPeople] = useState(['Peter'])
// https://lambda-swapi.herokuapp.com/api/people
//Backup api
    useEffect(() =>{
      axios.get('https://swapi.co/api/people/ ')
      .then(response => {
        setPeople(response.data.results)
      })
      .catch(error => {
        console.log('The data is not being returned', error)
      })
    }, [])
return (
    <Container className = 'outerdiv'>
    {people.map((person, index) => {
        return (

            <PeopleCard
            key={index}
            name={person.name}
            height={person.height}
            mass={person.mass}
            hairColor={person.hair_color}
            skinColor={person.skin_color}
            />
        )
    })}
    </Container>
)

};
export default PeopleList;