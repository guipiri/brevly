import { createLinkUseCase } from '@/app/use-cases/create-link'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const createLinkRoute: FastifyPluginAsyncZod = async (server) => {
  server.post(
    '/links',
    {
      schema: {
        body: z.object({
          url: z.string().url(),
          alias: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { url, alias } = request.body

      const { createdLink } = await createLinkUseCase({ url, alias })

      reply.status(201).send({ createdLink })
    }
  )
}
