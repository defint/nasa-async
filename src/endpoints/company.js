const companyStore = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
];
let id = 9;

export const addCompany = () =>
  new Promise(resolve => {
    setTimeout(() => {
      id++;

      const company = {
        id,
        name: id,
      };
      companyStore.push(company);

      resolve(company);
    }, 400);
  });

export const deleteCompany = id =>
  new Promise(resolve => {
    setTimeout(() => {
      const index = companyStore.findIndex(item => item.id === id);

      companyStore.splice(index, 1);

      resolve({
        index: 0,
      });
    }, 400);
  });

export const fetchCompanies = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(companyStore);
    }, 400);
  });
