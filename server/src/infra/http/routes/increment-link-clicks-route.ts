import { incrementLinkClicksUseCase } from '@/app/use-cases/factories/make-drizzle-use-cases'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const incrementLinkCliksRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/links/:alias/increment-clicks',
    {
      schema: {
        params: z.object({
          alias: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { alias } = request.params

      const link = await incrementLinkClicksUseCase.exec(alias)
      return reply.status(201).send({ link })
    }
  )
}
