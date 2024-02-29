import Pages from '../pages'

const publicRouter = [
  {
    path: '/',
    component: Pages.Home
  },
  {
    path: '/setting',
    component: Pages.Setting
  }
]

const privateRouter = []

const AppRouters = {
  publicRouter,
  privateRouter
}

export default AppRouters
