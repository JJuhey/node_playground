import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function NavBar() {
  const [ActiveItem, setActiveItem] = useState('')

  const onClickFirstMenu = () => {
    setActiveItem('first')
    window.location.href='/board'
  }
  const onClickSecondMenu = () => {
    setActiveItem('second')
  }
  const onClickThirdMenu = () => {
    setActiveItem('third')
  }
  const onClickSignupMenu = () => {

  }

  return (
      <Menu stackable>
        <Menu.Item header>JJU</Menu.Item>
        <Menu.Item
          name='BOARD'
          active={ActiveItem === 'first'}
          onClick={onClickFirstMenu}
        />
        <Menu.Item
          name='GALLERY'
          active={ActiveItem === 'second'}
          onClick={onClickSecondMenu}
        />
        <Menu.Item
          name='ADMIN'
          active={ActiveItem === 'third'}
          onClick={onClickThirdMenu}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='LOGIN'
            active={ActiveItem === 'signup'}
            onClick={onClickSignupMenu}
          />
        </Menu.Menu>
      </Menu>
  )
}

export default NavBar
