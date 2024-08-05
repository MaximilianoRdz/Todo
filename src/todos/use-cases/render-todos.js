import { Todo } from "../models/todo.model"
import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    
    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`Elemento ${elementId} no se encontro`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
}