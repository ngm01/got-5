import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
}

export const getTasks = createAsyncThunk('/tasks/getTasks', async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    const allTasks = await AsyncStorage.multiGet(allKeys);
    let parsedTasks = allTasks.map(task =>  JSON.parse(task[1]))
    return parsedTasks;
})

export const createTask = createAsyncThunk('/tasks/createTask', async (taskToCreate) => {
    const {id} = taskToCreate;
    const serializedTask = JSON.stringify(taskToCreate);
    await AsyncStorage.setItem(id, serializedTask);
    return taskToCreate;
})

export const deleteTask = createAsyncThunk('/tasks/deleteTask', async (id) => {
    const response = await AsyncStorage.removeItem(id);
    return {id};
})

export const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        taskUpdated(state, action) {
            const {taskId, title, time, cadence} = action.payload;
            const taskToUpdate = state.posts.find(task => task.id === taskId);
            if(taskToUpdate) {
                taskToUpdate.title = title;
                taskToUpdate.time = time;
                taskToUpdate.cadence = cadence;
            }
        },
        taskAdded(state, action) {
            console.log("added task:", action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getTasks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks.push(action.payload)
            })
            .addCase(deleteTask.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const {id} = action.payload;
                state.tasks = state.tasks.filter(task => task.id !== id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { taskAdded } = taskSlice.actions;

export default taskSlice.reducer;

export const selectAllTasks = (state) => state.tasks.tasks;