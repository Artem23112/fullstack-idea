import { getViewIdeaRoute } from '@lib/routes'
import { trpc } from '@lib/trpc'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export const AllIdeasPage = () => {
  const { data } = useQuery(trpc.getIdeas.queryOptions())
  console.log(data)
  return (
    <div>
      <h1>Ideanick</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>
            <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>{idea.name}</Link>
          </h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}
