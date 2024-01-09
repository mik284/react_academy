import { useEffect } from "react"
import fetchUsers from "../../services/userApi"


function Users() {
    useEffect(() => {
    fetchUsers()
    }, [])
  return (
    <div>Users</div>
  )
}

export default Users