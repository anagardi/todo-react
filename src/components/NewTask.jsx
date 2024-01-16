import React, { useState, useContext } from "react";
import Add from "./Add";
import Title from "./Title";
import { URLContext, TitleContext, TasksListContext } from "./Context";
import axios from "axios";

function NewTask({ isOptimistic }) {

    const { url } = useContext(URLContext);
    const { todosList, setTodoList } = useContext(TasksListContext);

    const [title, setTitle] = useState("");
    const titleValue = { title, setTitle };

    async function handleOnSubmit(e) {

        e.preventDefault();

        if (title === "") { return; }

        let task = { title: title, complete: false };

        return await axios
            .post(url, task)
            .then((response) => {
                console.log("POST: new task is added: ", response.data);
                isOptimistic.current = true;
                setTodoList([...todosList, response.data]);
                setTitle("");
                isOptimistic.current = false;
            })
            .catch((error) => console.error(error));
    }

    return (
        <TitleContext.Provider value={titleValue}>
            <form onSubmit={handleOnSubmit}>
                <div className="wrapper newTask">
                    <Title placeholder="Add new task" autoComplete="off" value={title} />
                    <Add />
                </div>
            </form >
        </TitleContext.Provider >
    );
}

export default NewTask;