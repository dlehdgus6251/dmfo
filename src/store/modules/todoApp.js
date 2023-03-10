const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
};
const state = {
    headerText: 'TODO it!',
        todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations={
    addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.i,1);
    },
    toggleOneItem(state, payload){
        state.todoItems[payload.i].completed = !state.todoItems[payload.i].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}