import React, { useState, useRef } from "react";

export const UseRef = () => {
  const [text, setText] = useState(null);
  const inputEl = useRef(null);

  const onHandleClick = () => {
    setText((prev) => inputEl.current.value);
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onHandleClick}>Get Text</button>
      <div>{text}</div>
    </div>
  );
};
