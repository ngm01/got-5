import { StyleSheet, Text, View } from 'react-native';
import TaskButtons from './Views/TaskButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskButtons />
    </View>
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