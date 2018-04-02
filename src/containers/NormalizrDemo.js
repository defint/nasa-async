import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/nasaActionCreators';
import photoSchema from '../schemas/photo';
import AsyncContainer from '../AsyncContainer';

class NormalizrDemo extends Component {
  render() {
    const { changeStore } = this.props;

    console.log('!!!render!!!');

    return (
      <AsyncContainer
        asyncAction={actionCreators.nasaFetchCuriosity}
        renderLoading={<span>Loading...</span>}
        render={data => (
          <div>
            <ul>
              {data.map(item => (
                <li key={item.id}>
                  <span>{item.earth_date}</span>
                  <div>
                    <img src={item.img_src} alt="" width={200} />
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={() => changeStore()}>Click</button>
          </div>
        )}
        selector={state => state.curiosity}
        schema={[photoSchema]}
      />
    );
  }
}

const mapDispatchToProps = {
  changeStore: actionCreators.changeStore,
};

export default connect(() => ({}), mapDispatchToProps)(NormalizrDemo);
