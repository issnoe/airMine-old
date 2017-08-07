
import UsuarioScreen from '/src/components/usuario.js'
import AireScreen from '/src/components/aire.js'
import UvScreen from '/src/components/uv.js'
import SummerScreen from '/src/components/summer.js'
import RankingScreen from '/src/components/rankingList.js'
import CreditosScreen from '/src/components/creditos.js'


export const NavToogle = DrawerNavigator({
  Usuario: {
    screen: UsuarioScreen
  },
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

  Creditos: {
    screen: CreditosScreen,
  },
});