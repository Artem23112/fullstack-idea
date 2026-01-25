import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams()
  return (
    <div>
      <h1>{ideaNick}</h1>
    </div>
  )
}
