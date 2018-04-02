import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/companyActionCreators';
import companySchema from '../schemas/company';
import AsyncContainer from '../AsyncContainer';

class CompanyPage extends Component {
  render() {
    const { addCompanyAsync, deleteCompanyAsync } = this.props;

    return (
      <AsyncContainer
        asyncAction={actionCreators.fetchCompaniesAsync}
        render={data => (
          <div>
            <ul>
              {data.map(item => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <button onClick={() => deleteCompanyAsync(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={addCompanyAsync}>Add</button>
          </div>
        )}
        Loading={<span>Loading...</span>}
        selector={state => state.company.fetch}
        schema={[companySchema]}
      />
    );
  }
}

const mapDispatchToProps = {
  addCompanyAsync: actionCreators.addCompanyAsync,
  deleteCompanyAsync: actionCreators.deleteCompanyAsync,
};

export default connect(() => ({}), mapDispatchToProps)(CompanyPage);
