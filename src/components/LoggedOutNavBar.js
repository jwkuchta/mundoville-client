import React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "../react-auth0-spa";

const LoggedOutNavBar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
        {/* <button onClick={() => loginWithRedirect({})}>Log in</button> */}
        <Link onClick={() => loginWithRedirect({})}>Log In</Link>
    </div>
  );
};

export default LoggedOutNavBar;