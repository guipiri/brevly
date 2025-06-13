import { uploadCsvToStorageUseCase } from '@/app/use-cases/factories/make-drizzle-use-cases'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const uploadCsvToStorageRoute: FastifyPluginAsyncZod = async server => {
  server.get('/links/export-csv', async (_, reply) => {
    const { exportUrl } = await uploadCsvToStorageUseCase.exec()
    return reply.status(200).send({
      exportUrl,
    })
  })
}
