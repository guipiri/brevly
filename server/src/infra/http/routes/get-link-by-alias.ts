import { getLinkByAlias } from '@/app/use-cases/get-link-by-alias'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const getLinkByAliasRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    '/links/:alias',
    {
      schema: {
        params: z.object({
          alias: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const alias = request.params.alias
      const { link } = await getLinkByAlias({ alias })

      reply.status(201).send({ link })
    }
  )
}
