import React from 'react';

import GiphyCard from 'components/GiphyCard';
import { Text, Box, Flex } from 'rebass';

export default class SearchResultsSection extends React.PureComponent {
  renderResult = (result, index) => {
    return (
      <GiphyCard
        giphy={result}
        key= {index}
      />
    );
  }

  render() {
    const { results } = this.props;

    if (!results.length) {
      return null;
    }

    return (
      <Box my={4}>
        <Text textAlign="center" fontSize={22}>Results: </Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          {results.map(this.renderResult)}
        </Flex>
      </Box>
    );
  }
}
