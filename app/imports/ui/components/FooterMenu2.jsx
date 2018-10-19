import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class FooterMenu2 extends React.Component {
  render() {
    return (
        <div>
          <Grid>
            <Grid.Row container columns={3} >
              <Grid.Column>

                <Image src ='https://w.halocdn.com/content/images/xbox-footer.png' centered middle />
              </Grid.Column>
              <Grid.Column>
                <Image src = 'https://w.halocdn.com/content/images/microsoft-w.png' centered middle /></Grid.Column>
              <Grid.Column>
                <Image src='https://content.halocdn.com/media/Default/Ratings/ESRB/OctoberUpdate/rating_pending_v2-247268bc38644db3b48ee16e8b2acf63.jpg'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
