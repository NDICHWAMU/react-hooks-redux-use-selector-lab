import React from "react";
import {useSelector} from "react-redux";

function Users() {
  const users = useSelector(state=> state.users)
  console.log(users);
  return (
    <div>
      <ul>
        
      </ul>
    </div>
  );
}

export default Users;
