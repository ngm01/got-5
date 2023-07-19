import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useSound = (path) => {

    const [soundToPlay, setSound] = useState();

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(path)
        setSound(sound);
        await sound.playAsync();
    }
    
    useEffect(() => {
        return soundToPlay ?
        () => {
            soundToPlay.unloadAsync();
        } : undefined
    }, [soundToPlay])

    return [playSound]

}