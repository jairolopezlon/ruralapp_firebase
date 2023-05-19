import { Link } from 'react-router-dom'
import { routesMap } from '@src/routes'

function MainMenu() {
  return (
    <>
      <ul>
        <ul>
          <Link to={routesMap.routeHome.path as string}>Home</Link>
        </ul>
        <ul>
          <Link to={routesMap.routeNegociosList.path as string}>Negocios</Link>
        </ul>
      </ul>
    </>
  )
}

export default MainMenu