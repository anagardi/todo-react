import React, { useContext, useState } from "react";
import { CompleteContext, URLContext, IdContext, TitleContext, TasksListContext } from "./Context";
import axios from "axios";

function Title({ isOptimistic }, props) {

    const { todosList, setTodoList } = useContext(TasksListContext);

    const [changed, setChanged] = useState(false);

    const { url } = useContext(URLContext);
    const { id } = useContext(IdContext);
    const { title, setTitle } = useContext(TitleContext);
    const { complete } = useContext(CompleteContext);

    async function handleOnBlur() {

        if (!changed || id === 0) return;

        if (title.length === 0) {
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

        let task = { title: title, complete: complete };

        return await axios
            .put(url + "/" + id, task)
            .then((response) => {
                console.log(`PUT: task, id: ${id}, is changed: `, response.data);
            })
            .catch((error) => console.error(error));
    }

    function handleChange(e) {
        setTitle(e.target.value);
        setChanged(true);
    }

    function handleKeyDown(e) {
        if (id === 0) return;
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }

    return (
        <input
            {...props}
            type="text"
            className={"title" + (complete && " completed")}
            readOnly={complete}
            value={title}
            onChange={handleChange}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
        >
        </input>
    );
}

export default Title;


