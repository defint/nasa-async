import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/nasaActionCreators';
import { createAsyncNormalizeSelector } from '../utils/asyncHelpers';
import photoSchema from '../schemas/photo';

class NormalizrDemo extends Component {
  componentDidMount() {
    this.props.nasaFetchCuriosity();
  }

  render() {
    const { loading, curiosity } = this.props;

    if (loading || !curiosity) {
      return <span>Loading...</span>;
    }

    return (
      <ul>
        {curiosity.map(item => (
          <li key={item.id}>
            <span>{item.earth_date}</span>
            <div>
              <img src={item.img_src} alt="" width={200} />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const getCuriosityPhotos = createAsyncNormalizeSelector(
  [photoSchema],
  state => state.curiosity
);

const mapStateToProps = state => ({
  loading: state.curiosity.loading,
  curiosity: getCuriosityPhotos(state),
});

const mapDispatchToProps = {
  nasaFetchCuriosity: actionCreators.nasaFetchCuriosity,
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalizrDemo);
