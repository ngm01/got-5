import store from './store';
import { useState } from 'react';
import {Provider} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {DefaultTheme, DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskContext from './state/TaskContext';
import Home from './Views/Home';
import CreateTask from './Views/CreateTask';
import TaskList from './Views/TaskList';
import Timer from './Views/Timer';
import FinishedModal from './Views/FinishedModal';
import { colors } from './styles/baseStyleDefinitions';
import Settings from './Views/Settings';
import { requestPermissionsAsync } from './util/handle-local-notification';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
 
  const {height, width} = useWindowDimensions();

  const [currentTask, setCurrentTask] = useState(null)

  useEffect(() => {
    requestPermissionsAsync();

  }, [])

  return (
    <TaskContext.Provider value={[currentTask, setCurrentTask]}>
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.accent_a,
              headerTitleStyle: {
                fontWeight: 'bold',
              }
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
              name="Settings"
              component={Settings}
              options={{ title: 'Settings' }}
            />
            <Stack.Screen 
              name="Timer"
              component={Timer}
              options={{title: '',  headerShown: false}}
            />
            <Stack.Screen 
              name="FinishedModal"
              component={FinishedModal}
              options={{title: '', headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </TaskContext.Provider>
  );
}