import { View } from "react-native";
import notifee from '@notifee/react-native';

function Notification() {

     async function onDisplayNotification() {
       
    //     // request permissions (required for iOS)
    //     await notifee.requestPermission()


    //     // create a channel (required for Android)
    //     const channelId = await notifee.createChannel({
    //         id: 'default',
    //         name: 'Default Channel'
    //     })

    //     // display a notification
    //     await notifee.displayNotification({
    //         title: 'My First Notification',
    //         body: 'Your task is done',
    //         android: {
    //             channelId,
    //             pressAction: { id: 'default' }
    //         }
    //     })
    }

    return ( 
        <View>
            <Button title='Notification Test -- Click me' color="green" onPress={() => onDisplayNotification()} />
        </View>
     );
}

export default Notification;