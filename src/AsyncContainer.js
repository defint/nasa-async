import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAsyncNormalizeSelector } from 'redux-actions-async';

class AsyncContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    asyncAction: PropTypes.func.isRequired,
    selector: PropTypes.func.isRequired,
    Loading: PropTypes.object,
    schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };

  componentDidMount() {
    this.props.asyncAction();
  }

  render() {
    const { loading, data, render, Loading } = this.props;

    if (loading || !data) {
      return Loading || null;
    }

    return render(data);
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  asyncAction: () => {
    dispatch(ownProps.asyncAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AsyncContainer);
