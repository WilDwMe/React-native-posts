
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../Theme';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{
          title: 'Main',
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
          },
          headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="Post" component={PostScreen} options={{
          title: 'Post',
          headerStyle: {
            backgroundColor: THEME.DANGE_COLOR
          },
          headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
  );
};
