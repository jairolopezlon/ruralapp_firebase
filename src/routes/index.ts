import { createBrowserRouter, RouteObject } from "react-router-dom"

import { routeHome } from './routeHome'
import { routeNegociosList } from './routeNegociosList'
import { routeNegociosProfile } from './routeNegociosProfile'

export const routesMap = {
  routeHome,
  routeNegociosProfile,
  routeNegociosList,
}

const routes: RouteObject[] = Object.values(routesMap)
export const router = createBrowserRouter(routes)