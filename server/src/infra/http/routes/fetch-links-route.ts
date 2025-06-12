import { fetchLinks } from '@/app/use-cases/fetch-links'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const fetchLinkRoute: FastifyPluginAsyncZod = async server => {
  server.get('/links', async (_, reply) => {
    const { links } = await fetchLinks()

    reply.status(201).send({ links })
  })
}
