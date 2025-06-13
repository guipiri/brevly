import type { LinksRepository } from '@/infra/repositories/links-repository'
import { LinkNotFoundException } from './errors/link-not-found'

export class DeleteLinkUseCase {
  constructor(private linksRepository: LinksRepository) {}
  async exec(alias: string) {
    const aliasExists = await this.linksRepository.findByAlias(alias)

    if (!aliasExists) throw new LinkNotFoundException()

    await this.linksRepository.delete(alias)
  }
}
