// React Router Dom (RRD) imports
import { redirect } from "react-router-dom";

// library dependencies
import { toast } from "react-toastify";

// helper functions
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  toast.success("You've deleted your account!")
  // return redirect
  return redirect("/")
}