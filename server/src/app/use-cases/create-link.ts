import type {
  CreateLinkInput,
  LinksRepository,
} from '@/infra/repositories/links-repository'
import { AliasAlreadyExistsException } from './errors/alias-link-already-exists'
import { InvalidLinkFormatException } from './errors/invalid-link-format'

export const aliasRegex = /^[a-zA-Z0-9_\-]+$/

export class CreateLinkUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async exec({ alias, url }: CreateLinkInput) {
    const linkAlreadyExists = await this.linksRepository.findByAlias(alias)

    if (linkAlreadyExists) throw new AliasAlreadyExistsException(alias)

    const isAliasInValidFormat = aliasRegex.test(alias)
    if (!isAliasInValidFormat) throw new InvalidLinkFormatException()

    const newLink = await this.linksRepository.create({ alias, url })

    return newLink
  }
}
