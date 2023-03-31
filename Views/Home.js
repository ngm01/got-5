import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import TaskButtons from './TaskButtons';
import TaskSelector from './TaskSelector';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Home() {

    [taskToDo, setTaskToDo] = useState(null);
    [isTimerRunning, setIsTimerRunning] = useState(false);

    const toggleIsTimerRunning = () => {
        setIsTimerRunning(current => !current)
    }

    return (
        <View style={styles.container}>
            <TaskSelector setTaskToDo={setTaskToDo} />
            <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={7}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
            <Button 
                onPress={toggleIsTimerRunning}
                title={isTimerRunning ? "STOP" : "START"}
                color="#fb4d3d"
                accessibilityLabel="Timer Start/Stop Button"
            />
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