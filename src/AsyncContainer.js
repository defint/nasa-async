import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAsyncNormalizeSelector } from 'redux-actions-async';

class AsyncContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    asyncAction: PropTypes.func.isRequired,
    selector: PropTypes.func.isRequired,
    schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  componentDidMount() {
    this.props.asyncAction();
  }

  render() {
    const { render, ...rest } = this.props;

    return render(rest);
  }
}

const mapStateToProps = (state, ownProps) => {
  let { data, loading } = ownProps.selector(state);

  if (ownProps.schema) {
    const asyncNormalizeSelector = createAsyncNormalizeSelector(
      ownProps.schema,
      ownProps.selector
    );

    data = asyncNormalizeSelector(state);
  }

  return {
    loading,
    data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const methods = {
    asyncAction: () => {
      dispatch(ownProps.asyncAction());
    },
  };

  if (ownProps.controls) {
    const keys = Object.keys(ownProps.controls);
    keys.forEach(item => {
      methods[item] = () => {
        dispatch(ownProps.controls[item]());
      };
    });
  }

  return methods;
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncContainer);
