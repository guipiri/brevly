import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { uploadFileToStorage } from '@/infra/storage/upload-file-to-storage'
import { write } from '@fast-csv/format'

export const uploadCsvToStorage = async () => {
  const res = await db.select().from(links)
  const linksFormatted = res.map(link => {
    return [link.id, link.url, link.alias, link.clicks, link.createdAt]
  })
  linksFormatted.unshift(['id', 'url', 'alias', 'clicks', 'createdAt'])

  const csvStream = write(linksFormatted)

  const { exportUrl } = await uploadFileToStorage({ contentStream: csvStream })

  return {
    exportUrl,
  }
}
