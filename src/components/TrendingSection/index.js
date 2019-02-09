import React from 'react';

import Card from 'components/Card';
import { Text, Box, Flex } from 'rebass';

export default class TrendingSecton extends React.PureComponent {
  render() {
    return (
      <Box my={5}>
        <Text fontSize={18}>Trending section</Text>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Card
            p={2}
            my={3}
            mx={2}
            width={1/3}
          >Casio</Card>
          <Card
            p={2}
            my={3}
            mx={2}
            width={1/3}
          >Casio</Card>
          <Card
            p={2}
            my={3}
            mx={2}
            width={1/3}
          >Casio</Card>
        </Flex>
      </Box>
    );
  }
}
