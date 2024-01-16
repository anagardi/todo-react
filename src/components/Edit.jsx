import React, { useContext } from "react";
import { IdContext, TitleContext, CompleteContext } from "./Context";

function Edit() {

    const { id } = useContext(IdContext);
    const { title } = useContext(TitleContext);
    const { complete } = useContext(CompleteContext);

    function editTask() {

        console.log("id : ", id);
        console.log("title : ", title);
        console.log("complete : ", complete);        
    }

    return (
        <input
            type="button"
            className="btn edit"
            onClick={editTask}
        >
        </input>);
}

export default Edit;