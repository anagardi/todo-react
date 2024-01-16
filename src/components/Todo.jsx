import React, { useState, useRef } from "react";
import Check from "./Check";
import Title from "./Title";
import Delete from "./Delete";
import { CompleteContext, TitleContext, IdContext } from "./Context";

function Todo(props) {

    const [id, setId] = useState(props.id);
    const idValue = { id, setId };

    const [title, setTitle] = useState(props.title);
    const titleValue = { title, setTitle };

    const [complete, setComplete] = useState(props.complete);
    const completeValue = { complete, setComplete };
    
    const isOptimistic = useRef(false);

    return (
        <IdContext.Provider value={idValue}>
            <CompleteContext.Provider value={completeValue}>
                <TitleContext.Provider value={titleValue}>
                    <div id={id} className="wrapper">
                        <Check />
                        <Title  isOptimistic={isOptimistic}/>
                        <Delete isOptimistic={isOptimistic}/>
                    </div>
                </TitleContext.Provider>
            </CompleteContext.Provider>
        </IdContext.Provider>
    )
}

export default Todo;