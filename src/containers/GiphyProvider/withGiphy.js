import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  getTrendingInit,
  searchInit,
  addRemoveFavorite
} from './actions';

export const withGiphy = WrappedComponent => {
  return class Giphy extends React.PureComponent {
    componentDidMount() {
      this.props.getTrending();
    }

    handleOnSearch = (search) => {
      this.props.search(search);
    }

    handleOnAddRemoveFavorite = (favorite) => {
      this.props.addRemoveFavorite(favorite);
    }

    render() {
      const {
        trendingList,
        searchList,
        searchPagination,
        trendingError,
        searchError,
        favorites
      } = this.props;

      const props = {
        onSearch: this.handleOnSearch,
        onAddRemoveFavorite: this.handleOnAddRemoveFavorite,
        trendingList,
        searchList,
        searchPagination,
        trendingError,
        searchError,
        favorites
      };

      return <WrappedComponent {...props} />
    }
  }
}

export const mapStateToProps = state => ({ ...state.gyphyProvider });
export const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(getTrendingInit()),
  search: (search) => dispatch(searchInit(search)),
  addRemoveFavorite: (favorite) => dispatch(addRemoveFavorite(favorite))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withGiphy
);
