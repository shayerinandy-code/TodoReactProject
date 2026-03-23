// TodoInput.tsx
import type { FC } from "react";
import { useState } from "react";

export interface TodoInputProps {
  onAdd: (text: string) => void; // <-- this must match exactly the prop you pass
}

const TodoInput: FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return; // ignore empty input
    onAdd(text);
    setText(""); // clear input
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;