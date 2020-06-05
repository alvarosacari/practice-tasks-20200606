const LOGIN_ROUTE_NAME = 'login'

export default function ({ store, route, redirect }) {
  const currentRouteName = route.name
  const isAuthenticated = store.state.auth.isAuthenticated

  if (currentRouteName === LOGIN_ROUTE_NAME) {
    return
  }

  if (!isAuthenticated) {
    redirect(`/${LOGIN_ROUTE_NAME}`)
  }
}
