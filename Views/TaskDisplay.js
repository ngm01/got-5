import { useRef } from 'react';
import useInterval from '../hooks/useInterval';
import { trimTaskTitle, getPseudoRandom } from '../util/util';

export default function taskDisplay() {
    
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