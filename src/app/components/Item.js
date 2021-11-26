import React from "react";

const Item = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default Item;
