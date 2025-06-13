import type { LinksRepository } from '@/infra/repositories/links-repository'
import { uploadFileToStorage } from '@/infra/storage/upload-file-to-storage'
import { write } from '@fast-csv/format'

export class UploadCsvToStorageUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async exec() {
    const links = await this.linksRepository.fetchLinks()

    const linksFormatted = links.map(link => {
      return [link.id, link.url, link.alias, link.clicks, link.createdAt]
    })
    linksFormatted.unshift(['id', 'url', 'alias', 'clicks', 'createdAt'])

    const csvStream = write(linksFormatted)

    const { exportUrl } = await uploadFileToStorage({
      contentStream: csvStream,
    })

    return {
      exportUrl,
    }
  }
}
