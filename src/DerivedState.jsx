import React, { useState } from "react";

export const AcessUser = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: 31 },
    { name: "Neon", age: 23 },
    { name: "Alyx", age: 25 },
    { name: "Ryan", age: 18 },
    { name: "Bruno", age: 22 },
  ]);

  console.log(users);
  const userLenght = users.length;

  const usersAvg = users.reduce((accum, currElem) => accum + currElem.age, 0) / userLenght;
  return (
    <>
      <h1>LENGHT: {userLenght}</h1>
      <h2>AVERAGE: {usersAvg}</h2>
      <p>USERS:
        {
          users.map((user, index) => (
            <li key={index}>{user.name} - {user.age}</li>
          ))
        }
      </p>
    </>

  )
};
