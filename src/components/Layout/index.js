import React from 'react';
import { Flex, Box, Heading } from 'rebass';

import GlobalStyles from 'components/GlobalStyles';

export default function Layout(props) {
  const { children, heading } = props;

  return (
    <React.Fragment>
      <GlobalStyles  />
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box width="100%" p={15}>
          <Heading>{heading}</Heading>
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  );
}
