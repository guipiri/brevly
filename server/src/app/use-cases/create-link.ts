import type {
  CreateLinkInput,
  LinksRepository,
} from '@/infra/repositories/links-repository'
import { AliasAlreadyExistsException } from './errors/alias-link-already-exists'
import { InvalidLinkFormatException } from './errors/invalid-link-format'

export class CreateLinkUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async exec({ alias, url }: CreateLinkInput) {
    const linkAlreadyExists = await this.linksRepository.findByAlias(alias)

    if (linkAlreadyExists) throw new AliasAlreadyExistsException(alias)

    const pattern = /^[a-zA-Z0-9]+$/
    const isAliasInValidFormat = pattern.test(alias)
    if (!isAliasInValidFormat) throw new InvalidLinkFormatException()

    const newLink = await this.linksRepository.create({ alias, url })

    return newLink
  }
}
