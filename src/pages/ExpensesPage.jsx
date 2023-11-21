// RRD imports
import { useLoaderData } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";

// Component Imports
import Table from "../components/Table";

// helper functions
import { deleteItem, fetchData } from "../helpers";

// create a loader function
export async function expensesLoader() {
  const expenses = await fetchData("expenses");
  return { expenses };
}

// Action
export async function expensesAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!")
    } catch(e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : ( 
        <p>No Expenses to Show</p>
      )}
    </div>
  );
};

export default ExpensesPage
