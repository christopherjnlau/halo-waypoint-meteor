import React from 'react';
import { Image, Menu, Icon, Container, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <div className='white'>
          <Menu borderless className="top">
            <Container>
              <Menu.Item>
                <a href='https://www.halowaypoint.com/en-us'>
                  <Image src ='https://w.halocdn.com/content/Images/halo-logo-2x.png'/>
                </a>
              </Menu.Item>
              <Menu.Item>
                <Dropdown text='Games'>
                  <Dropdown.Menu>
                    <Dropdown.Item>All Games</Dropdown.Item>
                    <Dropdown.Item>Halo Infinite</Dropdown.Item>
                    <Dropdown.Item>Halo: Fireteam Raven</Dropdown.Item>
                    <Dropdown.Item>Halo: Wars 2</Dropdown.Item>
                    <Dropdown.Item>Halo 5: Forge</Dropdown.Item>
                    <Dropdown.Item>Halo 5: Guardians</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>NEWS</Menu.Item>
              <Menu.Item>ESPORTS</Menu.Item>
              <Menu.Item>COMMUNITY</Menu.Item>
              <Menu.Item>FORMS</Menu.Item>
              <Menu.Item>UNIVERSE</Menu.Item>
              <Menu.Item>SHOP</Menu.Item>
              <Menu.Item position="right"><Icon name="search" /></Menu.Item>
              <Menu.Item>
                <a href='https://login.live.com/oauth20_authorize.srf?client_id=000000004C0BD2F1&scope=xbox.basic+xbox.offline_access&response_type=code&redirect_uri=https:%2f%2fwww.halowaypoint.com%2fauth%2fcallback&locale=en-us&display=touch&state=https%253a%252f%252fwww.halowaypoint.com%252fen-us'
                   >SIGN IN</a>
              </Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}
