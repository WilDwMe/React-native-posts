import * as Font from 'expo-font';

export const bootstrap = async () => {
    await Font.loadAsync({
        'open-bold': require('../assets/Fonts/OpenSans-Bold.ttf'),
        'open-regular': require('../assets/Fonts/OpenSans-Regular.ttf') 
    })
}

