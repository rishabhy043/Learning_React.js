const users = [
  { name: "Alice", age: 31 },
  { name: "Neon", age: 23 },
  { name: "Alyx", age: 25 },
  { name: "Ryan", age: 18 },
  { name: "Bruno", age: 22 },
];

export const AcessUser = () => {
  return (
    <h1>
      {users.map((a, index) => (
        <li key={index}>
          {a.name} - {a.age}
        </li>
      ))}
    </h1>
  );
};
