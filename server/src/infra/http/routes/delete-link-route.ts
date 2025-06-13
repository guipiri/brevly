import { LinkNotFoundException } from '@/app/use-cases/errors/link-not-found'
import { deleteLinkUseCase } from '@/app/use-cases/factories/make-drizzle-use-cases'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const deleteLinkRoute: FastifyPluginAsyncZod = async server => {
  server.delete(
    '/links/:alias',
    {
      schema: {
        params: z.object({ alias: z.string() }),
      },
    },
    async (request, reply) => {
      const { alias } = request.params

      try {
        const link = await deleteLinkUseCase.exec(alias)
        reply.status(201).send({ link })
      } catch (error) {
        if (error instanceof LinkNotFoundException) {
          return reply.status(404).send({
            success: false,
            message: error.message,
          })
        }
      }
    }
  )
}
