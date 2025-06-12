import { uploadCsvToStorage } from '@/app/use-cases/upload-csv-to-storage'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const uploadCsvToStorageRoute: FastifyPluginAsyncZod = async server => {
  server.get('/links/export-csv', async (_, reply) => {
    const { exportUrl } = await uploadCsvToStorage()
    return reply.status(201).send({
      exportUrl,
    })
  })
}
