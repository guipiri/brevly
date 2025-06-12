import { env } from '@/env'
import { Upload } from '@aws-sdk/lib-storage'
import { randomUUID } from 'node:crypto'
import { Readable } from 'node:stream'
import { z } from 'zod'
import { r2 } from './client'

const uploadFileToStorageInput = z.object({
  contentStream: z.instanceof(Readable),
})

type UploadFileToStorageInput = z.input<typeof uploadFileToStorageInput>

export async function uploadFileToStorage(input: UploadFileToStorageInput) {
  const { contentStream } = uploadFileToStorageInput.parse(input)

  const uniqueFileName = `csv-exports/${randomUUID()}-export-links.csv`

  const upload = new Upload({
    client: r2,
    params: {
      Key: uniqueFileName,
      Bucket: env.CLOUDFLARE_BUCKET,
      Body: contentStream,
      ContentType: 'text/csv',
    },
  })

  await upload.done()

  return {
    exportUrl: new URL(uniqueFileName, env.CLOUDFLARE_PUBLIC_URL).toString(),
  }
}
