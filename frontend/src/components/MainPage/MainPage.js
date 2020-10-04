import React from 'react'
import { Header } from 'semantic-ui-react'
import dog from '../../assets/cutedog.jpeg'

function MainPage() {
  return (
    <div>
      <Header as='h1'>
        THIS IS MAIN PAGE!
      </Header>
      <br/>
      <img style={{ width: '100%' }} src={dog} alt='dog'/>
    </div>
  )
}

export default MainPage
