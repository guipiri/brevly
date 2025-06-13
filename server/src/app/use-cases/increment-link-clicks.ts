import type { LinksRepository } from '@/infra/repositories/links-repository'
import { LinkNotFoundException } from './errors/link-not-found'

export class IncrementLinkUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async exec(alias: string) {
    const link = await this.linksRepository.incrementLinkClicks(alias)

    if (!link) throw new LinkNotFoundException()

    return link
  }
}
