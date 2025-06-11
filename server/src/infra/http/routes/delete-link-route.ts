import { deleteLinkUseCase } from '@/app/use-cases/delete-link'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const deleteLinkRoute: FastifyPluginAsyncZod = async (server) => {
  server.delete(
    '/links/:alias',
    {
      schema: {
        params: z.object({ alias: z.string() }),
      },
    },
    async (request, reply) => {
      const { alias } = request.params

      const { deletedLink } = await deleteLinkUseCase({ alias })

      reply.status(201).send({ deletedLink })
    }
  )
}
