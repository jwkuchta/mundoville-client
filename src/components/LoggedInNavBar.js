import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom'

const LoggedInNavBar = () => {
  const { logout, user } = useAuth0();

  return (
    <div>
        <Link onClick={() => logout({})}>Log Out</Link>
    </div>
  );
};

export default LoggedInNavBar;