import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useSound = (path) => {

    const [soundToPlay, setSound] = useState(null);
    const [shouldUnload, setShouldUnload] = useState(false)

    const playSound = async (trigger) => {
        try {
            console.log("Playing sound:", trigger)
            const playTime = new Date().toLocaleTimeString();
            const { sound } = await Audio.Sound.createAsync(path)
            setSound(sound);
            if(trigger === 'unload') {
                await sound.replayAsync()
                setShouldUnload(true);
            } else {
                await sound.playAsync();
            }
        } catch (e) {
            console.error("Error playing sound:", e);
        }
    }
    
    useEffect(() => {
        return soundToPlay ?
         async () => {
            const unloadTime = new Date().toLocaleTimeString();
            if(shouldUnload) {
                await soundToPlay.unloadAsync();
            }
            setSound(null);
        } : undefined
    }, [soundToPlay, shouldUnload])

    return [playSound]

}