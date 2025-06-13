import { fetchLinkUseCase } from '@/app/use-cases/factories/make-drizzle-use-cases'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const fetchLinkRoute: FastifyPluginAsyncZod = async server => {
  server.get('/links', async (_, reply) => {
    const links = await fetchLinkUseCase.exec()

    reply.status(201).send({ links })
  })
}
