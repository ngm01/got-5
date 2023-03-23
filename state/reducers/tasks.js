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
    const serializedTask = JSON.stringify(taskToCreate);
    await AsyncStorage.setItem(id, serializedTask);
})

export const deleteTask = createAsyncThunk('/tasks/deleteTask', async (taskId) => {
    const response = await AsyncStorage.removeItem(taskId);
    console.log("What response do we get from aysyncStorage?:", response);
    return {taskId};
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getTasks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks = state.tasks.concat(action.payload)
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload)
            })
            .addCase(deleteTask.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const {id} = action.payload;
                const tasks = state.tasks.filter(task => task.id !== id);
                state.tasks = tasks;

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