// local storage functions
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item from local storage
export const deleteItem = ({key}) => {
  return localStorage.removeItem(key);
};
