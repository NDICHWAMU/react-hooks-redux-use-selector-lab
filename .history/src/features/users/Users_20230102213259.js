import React from "react";
import {useSelector} from "react-redux";

function Users() {
  const users = useSelector(state=> state.users)
  console.log(users);
  return (
    <div>
      <ul>
        {users.map(user=>(
          <li key={user.username}>{user.username}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default Users;
