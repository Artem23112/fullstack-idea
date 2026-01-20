import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
      <h1> Welcome to Fullstack Idea </h1>
      <Outlet />
    </div>
  )
}
