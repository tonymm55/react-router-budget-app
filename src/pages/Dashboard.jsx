// RRD imports 
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers"

// create a loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }

}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
  <div>
    <h2>{userName}</h2>
    Dashboard
  </div>
  )
}

export default Dashboard