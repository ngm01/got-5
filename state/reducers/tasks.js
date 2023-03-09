import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        getAllTasks: async (state, action) => {

        },
        createTask: async (state, action) => {

        },
        updateTask: async (state, action) => {

        },
        deleteTask: async (state, action) => {

        }
    } 
})

export const { getAllTasks, createTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;