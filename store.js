import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './state/reducers/tasks';

export default configureStore({
    reducer: {
        tasks: taskReducer
    }
})