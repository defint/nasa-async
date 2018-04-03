import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators/nasaActionCreators';
import * as selectors from './reducers/nasaReducer';

class App extends Component {
  componentWillMount() {
    this.props.nasaFetchPlanet();
  }

  render() {
    const { loading, planet } = this.props;

    if (loading || !planet) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <h1>{planet.title}</h1>
        <img alt="" src={planet.url} width="500" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: selectors.loadingSelector(state),
  planet: selectors.dataSelector(state),
});

const mapDispatchToProps = {
  nasaFetchPlanet: actionCreators.nasaFetchPlanet,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
