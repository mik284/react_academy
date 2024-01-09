import { BASE_URL } from "../utils/config"

export const fetchUsers =()=>{
    const response = fetch(`${BASE_URL}/users`).then(res=>res.json)
    return response.data
}