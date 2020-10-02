import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Header, Container, Divider } from 'semantic-ui-react';
import NavBar from './components/NavBar/NavBar'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <Container textAlign='left' style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Header as='h1'>Hello JJuhey's Board</Header>
        <div style={{ textAlign: 'right' }}>반갑습니다. 로그인을 해주세요!</div>
        <Divider/>
        <NavBar/>
      </Container>
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
