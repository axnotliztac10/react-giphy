import React from 'react';
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';
import { Button } from 'rebass';

import Card from 'components/Card';

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

const InputText = ({ input }) => (
  <Input
    type="text"
    placeholder="Ex. Gatitos"
    value={input.value}
    onChange={event => input.onChange(event.target.value)}  
  />
);

export class Search extends React.PureComponent {
  searchInput = React.createRef();

  render() {
    const { handleSubmit, onSearch } = this.props;

    return (
      <Card p={2} px={3} my={4}>
        <form onSubmit={handleSubmit(onSearch)}>
          <Label>Search: </Label>
          <Field name="search" component={InputText} />
          <Button
            bg="magenta"
          >Go</Button>
        </form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'search'
})(Search);
