import { incrementLinkClicksUseCase } from '@/app/use-cases/increment-link-clicks'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const incrementeLinkCliksRoute: FastifyPluginAsyncZod = async server => {
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

      const { link } = await incrementLinkClicksUseCase({ alias })
      return reply.status(201).send({ link })
    }
  )
}
