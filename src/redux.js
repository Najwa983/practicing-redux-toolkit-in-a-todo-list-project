const { createSlice, configureStore } = require("@reduxjs/toolkit");

const todoSlice =createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
      ],
      reducers: {
        addTask: (state, action) => {
            const newTask ={
                id: Date.now(),
                text: action.payload,
                done: false
            }

            state.push(newTask);
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;

        },
        deleteTask: (state, action) => {
            state.filter((t) => t.id !== action.payload);
            return state;
            
            
        },
      }
});
export const {addTask, deleteTask, toggleTask} = todoSlice.actions; // redux toolkit facilitate the actions cretors

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
})

//action creators

// export const createToggle= (id) => {
//     return{
//         type: "todo/toggleTask",
//         payload: id
//     }
// }
// export const addTask= (text) => {
//     return{
//         type: "todo/addTask",
//         payload: text
//     }
// }
// export const deleteTask= (id) => {
//     return{
//         type: "todo/deleteTask",
//         payload: id
//     }
// }