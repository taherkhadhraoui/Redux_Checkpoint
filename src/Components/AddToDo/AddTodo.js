import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../../JS/Actions/Action";
function AddTodo() {
  const [item, setItem] = useState("");
  //replaces mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <div>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addItem({ id: Math.random(), todo: item, done: false }));
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default connect()(AddTodo);
