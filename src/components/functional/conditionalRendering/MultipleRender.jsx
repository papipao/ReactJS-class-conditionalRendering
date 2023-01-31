import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

function MultipleRender() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setIsLoading(false);
        setUser(login);
        console.log(login);
      })
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{user}</h1>
    </div>
  );
}

export default MultipleRender;
