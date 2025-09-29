import { useState } from "react";

export const Users = () => {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (username.trim() === "" || email.trim() === "")
      return alert("Fill in the required fields!");

    const newUser = { username, email };
    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <div>
        <h2>Users</h2>
        <ol>
          {users.map((user, index) => (
            <li key={index}>
              {user.username} ({user.email})
            </li>
          ))}
        </ol>
        <h2>Add new user</h2>
        <div>
          <input
            type="text"
            placeholder="Name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={addUser}>Add</button>
        </div>
      </div>
    </div>
  );
};
