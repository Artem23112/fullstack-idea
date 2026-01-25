import { getAllIdeasRoute, getViewIdeaRoute } from '@lib/routes'
import { createBrowserRouter } from 'react-router-dom'

import { Root } from './Root'
import { AllIdeasPage } from './pages/all-ideas-page/AllIdeasPage'
import { ViewIdeaPage } from './pages/view-idea-page/ViewIdeaPage'

export const router = createBrowserRouter([
  {
    path: getAllIdeasRoute(),
    Component: Root,
    children: [
      {
        index: true,
        Component: AllIdeasPage,
      },
      {
        path: getViewIdeaRoute({ ideaNick: ':ideaNick' }),
        Component: ViewIdeaPage,
      },
    ],
  },
])
