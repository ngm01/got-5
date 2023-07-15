import { useRef, useState } from 'react';
import useInterval from '../hooks/useInterval';
import { trimTaskTitle, getPseudoRandom } from '../util/util';

export default function taskDisplay() {
    
    const [possibleTask, setPossibleTask] = useState('Enter a time and get a task to get started!');
    const timerRef = useRef(0)
    
    useInterval(() => {
        if(timerRef.current < 100) {
            timerRef.current += .25;
            getRandomTask();    
        }
    }, 100)

    const getRandomTask = () => {
        if(tasks) {
            const randomTask = tasks[getPseudoRandom(tasks.length)].title;
            setPossibleTask(randomTask);
        }
    }

    return <></>
}