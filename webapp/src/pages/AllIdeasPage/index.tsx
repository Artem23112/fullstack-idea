import { trpc } from '@lib/trpc'
import { useQuery } from '@tanstack/react-query'

export const AllIdeasPage = () => {
  const { data } = useQuery(trpc.getIdeas.queryOptions())
  console.log(data)
  return (
    <div>
      <h1>Ideanick</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}
