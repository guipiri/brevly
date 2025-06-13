import type { LinksRepository } from '@/infra/repositories/links-repository'

export class GetLinkByAlias {
  constructor(private linksRepository: LinksRepository) {}

  async exec(alias: string) {
    const link = await this.linksRepository.findByAlias(alias)
    return link || null
  }
}
