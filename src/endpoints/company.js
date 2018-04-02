const companyStore = [];
let id = 0;

export const addCompany = () =>
  new Promise(resolve => {
    setTimeout(() => {
      id++;

      const company = {
        id,
        name: `Company ${Math.random() * 1000}`,
      };
      companyStore.push(company);

      resolve(company);
    }, 1000);
  });

export const deleteCompany = id =>
  new Promise(resolve => {
    setTimeout(() => {
      const index = companyStore.findIndex(item => item.id === id);

      companyStore.splice(index, 1);

      resolve({
        index: 0,
      });
    }, 1000);
  });

export const fetchCompanies = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(companyStore);
    }, 1000);
  });
