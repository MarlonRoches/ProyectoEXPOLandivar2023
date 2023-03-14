import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/HomeScreen';
import ReviewDetails from '../Screens/ReviewDetails';
import CameraScreen from '../Screens/CameraScreen';
import TemperatureScreen from '../Screens/TemperatureScreen';
import AlertScreen from '../Screens/AlertScreen';
import ControlScreen from '../Screens/ControlScreen';
import LigthsScreen from '../Screens/LigthsScreen';

const screens = {
    Home: {
    screen: Home
    },
    ReviewDetails: {
    screen: ReviewDetails
    },
    CameraScreen:{
        screen: CameraScreen
    },
    AlertScreen:{
      screen:AlertScreen
    },
    TemperatureScreen:{
        screen:TemperatureScreen
    },
    
    LigthsScreen: {
        screen: LigthsScreen
    },
    ControlScreen:{
        screen:ControlScreen
    }
    
}
const HomeStack = createStackNavigator (screens);
export default createAppContainer (HomeStack);