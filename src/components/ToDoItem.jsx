import React, { useState } from "react";

//props are read only, cant modify the props

function ToDoItem(props) {
  const [isDone, setCrossed] = useState(false);

  function handleClick() {
    setCrossed((prevValue) => {
      return !prevValue; //return opposite of the previous value
    });
  }

  return (
    //when the ToDoItem gets rendered, the function is only going to be called when we click
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li> {props.text} </li>
    </div>
  );
}

export default ToDoItem;
