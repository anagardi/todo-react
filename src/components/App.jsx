import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewTask from "./NewTask";
import CurrentTasks from "./CurrentTasks";
import { URLContext, TasksListContext } from "./Context";
import axios from "axios";

function App() {

    const port = 8000;

    const [url, setUrl] = useState(`http://localhost:${port}/api/item`);
    const urlValue = { url, setUrl };

    const [todosList, setTodoList] = useState([]);
    const todosListValue = { todosList, setTodoList };

    const isOptimistic = useRef(false);

    async function getTodos() {

        if (isOptimistic.current) return;

        return await axios
            .get(url)
            .then((response) => {
                if (response.data.length > 0) {
                    setTodoList(response.data);
                }
            })
            .catch((error) => console.error(error));
    }

    // eslint-disable-next-line
    useEffect(() => { getTodos(); }, []);

    return (
        <URLContext.Provider value={urlValue}>
            <TasksListContext.Provider value={todosListValue}>
                <Header />
                <NewTask isOptimistic={isOptimistic} />
                <CurrentTasks />
                <Footer />
            </TasksListContext.Provider>
        </URLContext.Provider>
    );
}

export default App;

