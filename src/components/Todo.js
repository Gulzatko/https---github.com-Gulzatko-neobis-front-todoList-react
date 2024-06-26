import React from "react";
import "../style/Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo, category }) => {
   return (
       
      <div className="Todo">
       <input type="checkbox" className={`${category ==="business" ? "checkbox-blue" : "checkbox-pink"}`}/>
        <p
            onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? "completed" : ""}`}>
            {task.task}
         </p>
         <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
         </div>
      </div>
   );
};
