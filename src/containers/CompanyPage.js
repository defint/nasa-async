import React, { Component } from 'react';
import * as actionCreators from '../actionCreators/companyActionCreators';
import companySchema from '../schemas/company';
import AsyncContainer from '../AsyncContainer';

const PureComponent = ({
  data,
  addCompanyAsync,
  deleteCompanyAsync,
  loading,
}) => (
  <React.Fragment>
    {loading && <span>Loading...</span>}
    {!loading &&
      data && (
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
  </React.Fragment>
);

class CompanyPage extends Component {
  render() {
    return (
      <AsyncContainer
        asyncAction={actionCreators.fetchCompaniesAsync}
        controls={{
          addCompanyAsync: actionCreators.addCompanyAsync,
          deleteCompanyAsync: actionCreators.deleteCompanyAsync,
        }}
        render={PureComponent}
        selector={state => state.company.fetch}
        schema={[companySchema]}
      />
    );
  }
}

export default CompanyPage;
