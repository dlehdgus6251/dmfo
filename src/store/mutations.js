const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.i,1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.i].completed = !state.todoItems[payload.i].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

 export {addOneItem, removeItem, toggleOneItem, clearAllItems }