import React, { useContext } from "react";
import Todo from "./Todo";
import { TasksListContext } from "./Context";

function CurrentTasks() {

    const { todosList } = useContext(TasksListContext);

    return (
        <div id="tasks">
            {
                todosList.map((todo) => (
                    <Todo
                        id={todo.id}
                        key={todo.id}
                        title={todo.title}
                        complete={todo.complete}
                    />
                ))
            }
        </div>
    );
}

export default CurrentTasks;