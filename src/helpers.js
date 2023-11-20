export const waait = () => new Promise(res => setTimeout(res, Math.random() * 3000))

// Colours
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65%v 50%`;
}

// local storage functions
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget 
export const createBudget = ({
  name, amount
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    colour: generateRandomColor()
  }
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
}

// delete item from local storage
export const deleteItem = ({key}) => {
  return localStorage.removeItem(key);
};
