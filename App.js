import store from './store';
import { useState } from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskContext from './state/TaskContext';
import Home from './Views/Home';
import CreateTask from './Views/CreateTask';
import TaskList from './Views/TaskList';
import Timer from './Views/Timer';
import { colors, colors_dark } from './styles/baseStyleDefinitions';

const Stack = createNativeStackNavigator();

export default function App() {
 
  [currentTask, setCurrentTask] = useState(null)

  return (
    <TaskContext.Provider value={[currentTask, setCurrentTask]}>
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors_dark.background,
              },
              headerTintColor: colors.white,
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