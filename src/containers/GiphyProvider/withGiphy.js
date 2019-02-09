import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  getTrendingInit,
  searchInit
} from './actions';

export const withGiphy = WrappedComponent => {
  return class Giphy extends React.PureComponent {
    componentDidMount() {
      this.props.getTrending();
    }

    handleOnSearch = (search) => {
      this.props.search(search);
    }  

    render() {
      const {
        trendingList,
        pagination,
        error
      } = this.props;

      const props = {
        onSearch: this.handleOnSearch,
        trendingList,
        pagination,
        error
      };

      return <WrappedComponent {...props} />
    }
  }
}

export const mapStateToProps = state => ({ ...state.gyphyProvider });
export const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(getTrendingInit()),
  search: (search) => dispatch(searchInit(search))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withGiphy
);
