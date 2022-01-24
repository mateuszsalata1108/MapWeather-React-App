import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const MainHeader = () => (
  <div>
    <Header as='h1' icon textAlign='center' inverted color="white">
        <Icon.Group>
            <Icon iverted color="olive" size='huge' name='globe'/>
        </Icon.Group>
      <Header.Content>Wpisz lokalizację, którą chcesz zobaczyć</Header.Content>
    </Header>
  </div>
)
export default MainHeader