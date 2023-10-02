import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useSound = (path) => {

    const [soundToPlay, setSound] = useState(null);

    const playSound = async () => {
        try {
            const playTime = new Date().toLocaleTimeString();
            const { sound } = await Audio.Sound.createAsync(path)
            setSound(sound);
            await sound.playAsync();
        } catch (e) {
            console.error("Error playing sound:", e);
        }
    }
    
    useEffect(() => {
        return soundToPlay ?
         async () => {
            const unloadTime = new Date().toLocaleTimeString();
            await soundToPlay.unloadAsync();
            setSound(null);
        } : undefined
    }, [soundToPlay])

    return [playSound]

}