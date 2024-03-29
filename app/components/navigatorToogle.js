
import UserScreen from './account/user.js'
import {
  
    Text,
  
} from 'react-native'; 
import UsuarioScreen from '../../src/components/usuario.js'
 import AireScreen from '../../src/components/aire.js'
import UvScreen from '../../src/components/uv.js'
 import SummerScreen from '../../src/components/summer.js'
 import RankingScreen from '../../src/components/rankingList.js'
 import CreditosScreen from '../../src/components/creditos.js'
import {StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
export const NavToogle = DrawerNavigator({
 
   Home: {
     screen: AireScreen,
   },
   Summer: {
     screen: SummerScreen,
   },
   Ranking: {
     screen: RankingScreen,
   },
  Uv: {
    screen: UvScreen,
  },
   Usuario:  { screen: UserScreen },

   Creditos: {
     screen: CreditosScreen,
   },
});