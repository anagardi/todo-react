import React, { useContext } from "react";
import { URLContext, TasksListContext, IdContext } from "./Context";
import axios from "axios";

function Delete({ isOptimistic }) {

    const { todosList, setTodoList } = useContext(TasksListContext);
    const { url } = useContext(URLContext);
    const { id } = useContext(IdContext);

    async function handleClick() {

        // console.log("id: ", id);

        return await axios
            .delete(url + '/' + id)
            .then((response) => {
                console.log(`DELETE: task, id: ${id}, is deleted: `, response.data);
                isOptimistic.current = true;
                setTodoList(todosList.filter((task) => task.id !== response.data.id));
                isOptimistic.current = false;
            })
            .catch((error) => console.error(error));
    }

    return (
        <input
            type="button"
            className="btn delete"
            onClick={handleClick}
        >
        </input>
    );
}

export default Delete;