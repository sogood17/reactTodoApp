import { React, useState } from "react";

export default function SetToDo() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);
  function toDoValue(event) {
    setToDo(event.target.value);
  }
  function formClicked(event) {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setList((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  return (
    <div>
      <form onClick={formClicked}>
        <input
          value={toDo}
          onChange={toDoValue}
          placeholder="please write to do!"
        ></input>
        <button>submit</button>
      </form>
      <div>
        <ul>
          {list.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
