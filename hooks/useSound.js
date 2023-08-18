import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useSound = (path) => {

    const [soundToPlay, setSound] = useState();

    const playSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(path)
            setSound(sound);
            await sound.playAsync();
        } catch (e) {
            console.log("Error playing sound:", e);
        }
    }
    
    useEffect(() => {
        return soundToPlay ?
        () => {
            soundToPlay.unloadAsync();
        } : undefined
    }, [soundToPlay])

    return [playSound]

}