import type { LinksRepository } from '@/infra/repositories/links-repository'

export class FetchLinksUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async exec() {
    const links = await this.linksRepository.fetchLinks()
    return links
  }
}
