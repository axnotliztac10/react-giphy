import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';

import Card from 'components/Card';

export default class Search extends React.PureComponent {
  searchInput = React.createRef();

  render() {
    const Label = styled.label`
      font-size: 1.4rem;
      color: #000;
      margin: 0.5rem 0;
    `;
    const Input = styled.input`
      background: #fff;
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 0.5rem 10px;
      border-radius: 5px;
      font-size: 1.1rem;
    `;

    return (
      <Card p={2} px={3} my={4}>
        <Label>Search: </Label>
        <Input ref={this.searchInput} type="text" placeholder="Ex. Gatitos" />
        <Button
          bg="magenta"
          onClick={() => this.props.onSearch(this.searchInput.current.value)}
        >Go</Button>
      </Card>
    );
  }
}
