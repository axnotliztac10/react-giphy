import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getTrendingInit,
  searchInit,
  addRemoveFavorite,
  searchFavorites
} from './actions';

export const withGiphy = WrappedComponent => {
  return class Giphy extends React.PureComponent {
    static propTypes = {
      trendingList: PropTypes.array,
      searchList: PropTypes.array,
      searchPagination: PropTypes.object,
      trendingError: PropTypes.object,
      searchError: PropTypes.object,
      favorites: PropTypes.array,
      getTrending: PropTypes.func,
      search: PropTypes.func,
      searchFavorites: PropTypes.func,
      addRemoveFavorite: PropTypes.func
    }

    componentDidMount() {
      this.props.getTrending();
    }

    handleOnSearch = (search) => {
      this.props.search(search);
    }

    handleOnSearchFavorites = ({ search }) => {
      this.props.searchFavorites(search);
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
        onSearchFavorites: this.handleOnSearchFavorites,
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
  searchFavorites: (search) => dispatch(searchFavorites(search)),
  addRemoveFavorite: (favorite) => dispatch(addRemoveFavorite(favorite))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withGiphy
);
