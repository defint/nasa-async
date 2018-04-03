import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/companyActionCreators';
import { dataSelector, loadingSelector } from '../reducers/companyReducer';

class CompanyPage extends Component {
  componentDidMount = () => {
    this.props.fetchCompaniesAsync();
  };

  render() {
    const { data, loading, addCompanyAsync, deleteCompanyAsync } = this.props;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              {'  '}
              <button onClick={() => deleteCompanyAsync(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button onClick={addCompanyAsync}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  data: dataSelector(state),
});

const mapDispatchToProps = {
  addCompanyAsync: actionCreators.addCompanyAsync,
  deleteCompanyAsync: actionCreators.deleteCompanyAsync,
  fetchCompaniesAsync: actionCreators.fetchCompaniesAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
