// a component that displays a card
import React from "react";

export const Card = (_props: any) => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div>Card value: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  );
};
