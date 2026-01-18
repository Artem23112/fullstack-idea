import { initTRPC } from '@trpc/server'
const trpc = initTRPC.create()

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea 1',
    description:
      'An innovative concept that aims to revolutionize the way we approach problem-solving in the modern world. This idea focuses on leveraging emerging technologies to create efficient and sustainable solutions.',
  },
  { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Description of idea 2...' },
  { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Description of idea 3...' },
  { nick: 'cool-idea-nick-4', name: 'Idea 4', description: 'Description of idea 4...' },
  { nick: 'cool-idea-nick-5', name: 'Idea 5', description: 'Description of idea 5...' },
]

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
