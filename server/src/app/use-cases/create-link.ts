import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'
import { InvalidLinkFormatException } from './errors/invalid-link-format'
import { AliasAlreadyExistsException } from './errors/alias-link-already-exists'

type CreateLinkInput = typeof links.$inferInsert

export const createLinkUseCase = async (input: CreateLinkInput) => {
  const linkAlreadyExists = await db.query.links.findFirst({
    where: eq(links.alias, input.alias),
  })

  if (linkAlreadyExists) throw new AliasAlreadyExistsException(input.alias)

  const pattern = /^[a-zA-Z0-9]+$/

  const isAliasInValidFormat = pattern.test(input.alias)

  if (!isAliasInValidFormat) throw new InvalidLinkFormatException()

  const newLink = await db.insert(links).values(input).returning()
  return { createdLink: newLink[0] }
}
