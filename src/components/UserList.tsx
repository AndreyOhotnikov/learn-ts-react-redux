import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const {error, loading, users} = useTypedSelector(state => state.user);
  return (
    <div>
      fgdfgdfg
    </div>
  )
}

export default UserList;
