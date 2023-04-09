import store from './store';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Views/Home';
import CreateTask from './Views/CreateTask';
import TaskList from './Views/TaskList';
import TaskButtons from './Views/TaskButtons';
import { colors } from './styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
              name="TaskButtons"
              component={TaskButtons}
            />
            <Stack.Screen 
              name="CreateTask"
              component={CreateTask}
              options={{ title: 'Create a Task' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    display: 'flex',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});