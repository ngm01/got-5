import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../state/reducers/tasks';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';
import { StyleSheet, Text, View } from 'react-native';
import TaskButtons from './TaskButtons';

export default function Home() {

    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    return (
        <View style={styles.container}>
            <TaskSelector />
            <TaskButtons />
        </View>
    )
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