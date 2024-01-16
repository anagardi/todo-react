import React, { useContext } from "react";
import { CompleteContext, URLContext, IdContext, TitleContext } from "./Context";
import axios from "axios";

function Check() {

    const { complete, setComplete } = useContext(CompleteContext);
    const { title } = useContext(TitleContext);
    const { url } = useContext(URLContext);
    const { id } = useContext(IdContext);

    async function handleClick() {

        let task = { title: title, complete: !complete };

        return await axios
            .put(url + "/" + id, task)
            .then((response) => {
                console.log(`PUT: checkbox, id: ${id}, is clicked: `, response.data);
                setComplete(response.data.complete);
            })
            .catch((error) => console.error(error));
    }

    return (
        <input
            type="button"
            className={complete ? "btn checked" : "btn"}
            onClick={handleClick}
        >
        </input>
    );
}

export default Check;