import React from 'react';

import Layout from 'components/Layout';
import Search from 'components/Search';
import Card from 'components/Card';

export default class Home extends React.PureComponent {
  render() {
    return (
      <Layout heading="React Challenge">
        <Search />
        <React.Fragment>
          <p>Trending section</p>
          <Card
            p={2}
            my={4}
            width={1/3}
          >Casio</Card>
        </React.Fragment>
      </Layout>
    );
  }
}
