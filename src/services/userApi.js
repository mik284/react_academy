import { BASE_URL } from "../utils/config";

const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchUsers;
