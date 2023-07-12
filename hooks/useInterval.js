// via: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
    const savedCallback = useRef();

    // remember latest cb
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    // set up interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if(delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}
