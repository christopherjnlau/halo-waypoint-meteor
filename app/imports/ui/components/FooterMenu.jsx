import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className='g'>
          <Grid>
            <Grid.Row className ='pad' container columns={3} >
              <Grid.Column>
                <Image src = 'https://content.halocdn.com/media/Default/home/modules/halo-championship-series-tox-wins-hcs-london-2018-80d68db7866e45579a4293eeb42065c0.jpg'/>
                <h2>
                  <a href="https://www.halowaypoint.com/en-us/news/hcs-london-2018-recap">TOX GAMING WINS HCS LONDON</a>
                </h2>
              </Grid.Column>
              <Grid.Column>
                <Image src ='https://content.halocdn.com/media/Default/home/modules/cf103_module-a718934f770541d08d211d678fe43107.jpg'/>
                <h2>
                  <a href= 'https://www.halowaypoint.com/en-us/news/thats-so-raven'>THE STORY OF FIRETEAM RAVEN</a>
                </h2>
              </Grid.Column>
              <Grid.Column>
                <Image src ='https://content.halocdn.com/media/Default/home/modules/halo_silent_storm_542x305-e1811d8f9c3345e8881fa2bd82e07da0.jpg'/>
                <h2>
                  <a href= 'https://www.amazon.com/dp/1501138383/ref=cm_sw_r_cp_api_o0PJBb9609JXC'>
                    HALO: SILENT STORM AVAILABLE NOW</a>
                </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
