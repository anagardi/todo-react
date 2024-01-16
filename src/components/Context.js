import { createContext } from 'react';

export const URLContext = createContext({
    url: "",
    setUrl: () => { }
});

export const TasksListContext = createContext({
    todosList: [],
    setTodoList: () => { }
});

export const IdContext = createContext({
    id: 0,
    setId: () => { }
});

export const TitleContext = createContext({
    title: "",
    setTitle: () => { }
});

export const CompleteContext = createContext({
    complete: false,
    setComplete: () => { }
});