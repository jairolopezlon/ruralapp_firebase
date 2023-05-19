import { RouteObject } from 'react-router-dom'
import { NegociosProfile } from '@src/pages'

export const routeNegociosProfile: RouteObject = {
  path: '/negocios/:negocioSlug',
  element: <NegociosProfile />,
}