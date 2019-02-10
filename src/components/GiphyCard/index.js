import React from 'react';
import { Image, Button, Text } from 'rebass';

import Card from 'components/Card';
import addButton from 'images/add.png';
import addedButton from 'images/added.png';
import loader from 'images/loader.svg';

export default class GiphyCard extends React.Component {
  state = {
    loaded: false
  }

  onLoad = () => {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { loaded } = this.state;
    const { giphy, onAddRemoveFavorite } = this.props;

    const Img = () => (
      <img
        alt={giphy.title}
        style={{
          maxWidth: '100%',
          display: (loaded) ? 'block' : 'none'
        }}
        src={giphy.images.downsized_medium.url}
        onLoad={this.onLoad}
      />
    );

    return (
      <Card
        p={2}
        my={3}
        mx={2}
        width={[1, 1/3, 1/4]}
      >
        <Img />
        {!loaded && <img src={loader} alt="loading" />}
        <Button
          p={0}
          width={1}
          variant="outline"
          bg="transparent"
          onClick={() => onAddRemoveFavorite(giphy)}
        >
          <Text pb={2} color="black">{giphy.title}</Text>
          {!giphy.isFavorite && <Image src={addButton} width={1/4} />}
          {giphy.isFavorite && <Image src={addedButton} width={1/4} />}
        </Button>
      </Card>
    );
  }
}
