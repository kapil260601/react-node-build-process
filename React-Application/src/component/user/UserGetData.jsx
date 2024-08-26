import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const envName = process.env.REACT_APP_ENV_NAME;

const UserGetData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
        console.log(`Environment: ${envName}`);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h6>
            Email: {user.email} Mobile: {user.phone}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default UserGetData;
