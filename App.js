import store from './store';
import Provider from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Views/Home';
import CreateTask from './Views/CreateTask';
import TaskList from './Views/TaskList';
import TaskButtons from './Views/TaskButtons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="TaskList"
            component={TaskList}
          />
          <Stack.Screen 
            name="TaskButtons"
            component={TaskButtons}
          />
          <Stack.Screen 
            name="CreateTask"
            component={CreateTask}
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
    backgroundColor: '#011627',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
provisional colors:
background: #011627
buttons: #fb4d3d
white text: #ece8ef
blue highlight: #3581b8
green highlight: #538083
*/

// TODO: Add storage: https://react-native-async-storage.github.io/async-storage/docs/api