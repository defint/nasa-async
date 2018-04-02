import React, { Component } from 'react';
import * as actionCreators from '../actionCreators/nasaActionCreators';
import AsyncContainer from '../AsyncContainer';

class App extends Component {
  render() {
    return (
      <AsyncContainer
        asyncAction={actionCreators.nasaFetchPlanet}
        renderLoading={<span>Loading...</span>}
        render={data => (
          <div>
            <h1>{data.title}</h1>
            <img alt="" src={data.url} width="500" />
          </div>
        )}
        selector={state => state.nasa.aa}
      />
    );
  }
}

export default App;
