import { RouteObject } from 'react-router-dom'
import { Home, NotFound } from '@src/pages'

export const routeHome: RouteObject = {
  path: '/',
  element: <Home />,
  errorElement: <NotFound />,
}