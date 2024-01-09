import { useEffect, useState } from "react";
import fetchUsers from "../../services/userApi";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setData(fetchedUsers);
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <h3>Current users.</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {data?.map((user) => {
            return (
              <div
                key={user.id}
                style={{
                  border: "1px solid grey",
                  borderRadius: 5,
                  gap: 2,
                  width: 200,
                  height: 250,
                  margin: "0 auto",
                  marginBottom: 10,
                  padding: 10,
                }}
              >
                <div>
                    <div>
                        👤
                    </div>
                  <h4>Name: {user.name}</h4>
                  <span>Username: {user.username}</span>
                  <p>☎️ {user.phone}</p>
                  <i>🌐 <a href={`http://${user.website}`}>{user.website}</a></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Users;
