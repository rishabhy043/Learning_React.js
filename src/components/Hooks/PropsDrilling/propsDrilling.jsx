// ParentComponent.jsx
export const ParentComponent = () => {
  const message = "Hello from ParentComponent!";

  return (
    <>
      <h1>I am Component A (Parent)</h1>
      <p>{message}</p>
      <ChildComponent data={message} />
    </>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>I am Child Component</h1>
      <h2 style={{ color: "blue" }}>{props.data}</h2>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>I am GrandChild Component</h1>
      <h2 style={{ color: "green" }}>{props.data}</h2>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>I am GrandGrandChild Component</h1>
      <h2 style={{ color: "red" }}>{props.data}</h2>
    </>
  );
};
