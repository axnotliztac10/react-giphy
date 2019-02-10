import React from 'react';
import { Link } from 'react-router-dom';
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
        <Box width="100%" p={30}>
          <Flex justifyContent="space-between">
            <Heading fontSize={28}>{heading}</Heading>
            <Flex>
              <Link to="/home">Home</Link>
              <Box ml={10}>
                <Link to="favorites">Favorites</Link>
              </Box>
            </Flex>
          </Flex>
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  );
}
