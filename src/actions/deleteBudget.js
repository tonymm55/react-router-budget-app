// RRD import
import { redirect } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";

// Helper function
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    })

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully!")
  } catch (e) {
    throw new Error("There was a problem deleting your budget. Please try again!")
  }
  return redirect("/");
}