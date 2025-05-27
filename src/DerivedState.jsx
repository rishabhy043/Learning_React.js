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

  const userCount = users.length;

  const userAvg =
    users.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

  return (
    <>
      <h2>Total users: {userCount}</h2>
      <h2>Average age: {userAvg.toFixed(2)}</h2>

      <ul>
        {users.map((curElem, index) => (
          <li key={index}>
            {curElem.name} - {curElem.age}
          </li>
        ))}
      </ul>
    </>
  );
};
