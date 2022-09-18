import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import NativeStack from './NativeStack'
import Cart from '../../screens/Cart'
// import ProductList from '../../screens/ProductList'
import { GlobalStyles } from '../../constants/styles'
import {Ionicons, Feather} from '@expo/vector-icons'
import Favorites from '../../screens/Favorites'

const Stack = createBottomTabNavigator()

const BottomStack = () => {

    const {colors} = GlobalStyles;

  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:colors.primary500},
        headerTintColor:"#fff",
        tabBarStyle:{backgroundColor:colors.primary500},
        tabBarActiveTintColor:colors.accent500
    }}>
        <Stack.Screen name='shop' component={NativeStack} options={{
            headerShown:false,
            title: "Product List",
            tabBarLabel: "Shop",
            tabBarIcon: ({color, size}) => <Feather name="shopping-bag" size={size} color={color} />
        }} />
        <Stack.Screen name='favorites' component={Favorites} options={{
            title: "Favorites",
            tabBarLabel: "Favorites",
            tabBarIcon: ({color, size}) => <Feather name="heart" size={size} color={color} />
        }} />
        <Stack.Screen name='cart' component={Cart} options={{
            title: "Shopping Cart",
            tabBarLabel: "Cart",
            tabBarIcon: ({color, size}) => <Feather name="shopping-cart" size={size} color={color} />
        }} />
    </Stack.Navigator>
  )
}

export default BottomStack