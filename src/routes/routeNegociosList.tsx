import { RouteObject } from 'react-router-dom'
import { NegociosList } from '@src/pages'

export const routeNegociosList: RouteObject = {
  path: '/negocios',
  element: <NegociosList />
}