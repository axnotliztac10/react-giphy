import React from 'react';
import { Image, Button, Text } from 'rebass';

import Card from 'components/Card';
import addButton from 'images/add.png';
import addedButton from 'images/added.png';

export default function GiphyCard({ giphy, onAddRemoveFavorite }) {
  return (
    <Card
      p={2}
      my={3}
      mx={2}
      width={[1, 1/3, 1/4]}
    >
      <Image width={1} src={giphy.images.downsizedMedium.url} />
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
