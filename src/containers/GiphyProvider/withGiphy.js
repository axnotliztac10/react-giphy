import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getTrendingInit } from './actions';

export const withGiphy = WrappedComponent => {
  return class Giphy extends React.PureComponent {
    componentDidMount() {
      this.props.getTrending();
    }

    render() {
      return <WrappedComponent />
    }
  }
}

export const mapStateToProps = state => ({ ...state });
export const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(getTrendingInit())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withGiphy
);
