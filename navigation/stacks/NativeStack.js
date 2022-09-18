import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductList  from '../../screens/ProductList'
import ProductDetail  from '../../screens/ProductDetail'
import { GlobalStyles } from '../../constants/styles'


const Stack = createNativeStackNavigator()

const NativeStack = () => {
    const {colors} = GlobalStyles
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:colors.primary500},
        headerTintColor:"#fff"
    }}>
        <Stack.Screen name='productList' component={ProductList} options={{
            title:"Product List"
        }} />
        <Stack.Screen name='productDetail' component={ProductDetail} options={{
            title:"Product Detail"
        }} />
    </Stack.Navigator>
  )
}

export default NativeStack
