import React from 'react';
import './App.css';
import PeopleList from './components/PeopleList';
import styled from 'styled-components';

const Header = styled.div`
width: 100%;
height: 200px;
display:flex;
justify-content: center;
align-content:center;
`;

const Title = styled.h1`
font-size: 4rem;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>
        <Title className="Header">React Wars</Title>
      </Header>
        <PeopleList/>
    </div>
  )
}

export default App;
