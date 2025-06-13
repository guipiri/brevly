import { AliasAlreadyExistsException } from '@/app/use-cases/errors/alias-link-already-exists'
import { InvalidLinkFormatException } from '@/app/use-cases/errors/invalid-link-format'
import { createLinkUseCase } from '@/app/use-cases/factories/make-drizzle-use-cases'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const createLinkRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/links',
    {
      schema: {
        body: z.object({
          url: z.string().url(),
          alias: z.string().regex(/^[a-zA-Z0-9]+$/),
        }),
      },
    },
    async (request, reply) => {
      const { url, alias } = request.body

      try {
        const link = await createLinkUseCase.exec({
          url,
          alias,
        })
        return reply.status(201).send({ link })
      } catch (error) {
        if (error instanceof InvalidLinkFormatException) {
          return reply.status(400).send({
            success: false,
            message: error.message,
          })
        }

        if (error instanceof AliasAlreadyExistsException) {
          return reply.status(409).send({
            success: false,
            message: error.message,
          })
        }
      }
    }
  )
}
