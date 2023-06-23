import store from './store';
import { createContext, useState } from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Views/Home';
import CreateTask from './Views/CreateTask';
import TaskList from './Views/TaskList';
import Timer from './Views/Timer';
import { colors } from './styles';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
export const TaskContext = createContext();

export default function App() {
 
  [currentTask, setCurrentTask] = useState(null)

  useEffect(() => {
    console.log("new current task:", currentTask)
  }, [currentTask])

  return (
    <TaskContext.Provider value={[currentTask, setCurrentTask]}>
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.secondary,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: '' }}
            /> 
            <Stack.Screen 
              name="TaskList"
              component={TaskList}
              options={{ title: 'Task List' }}
            />
            <Stack.Screen 
              name="CreateTask"
              component={CreateTask}
              options={{ title: 'Create a Task' }}
            />
            <Stack.Screen 
              name="Timer"
              component={Timer}
              options={{title: ''}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </TaskContext.Provider>
  );
}