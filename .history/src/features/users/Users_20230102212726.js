import React from "react";
import {useSelector} from "react-redux";

function Users() {
  const users = useSelector(state=> state.users)
  console.log(users);
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        []
      </ul>
    </div>
  );
}

export default Users;