import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/nasaActionCreators';

class NormalizrDemo extends Component {
  componentWillMount() {
    this.props.nasaFetchCuriosity();
  }

  render() {
    const { loading, curiosity } = this.props;

    if (loading || !curiosity) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        123
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.curiosity.loading,
  curiosity: state.curiosity.data,
});

const mapDispatchToProps = {
  nasaFetchCuriosity: actionCreators.nasaFetchCuriosity,
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalizrDemo);
