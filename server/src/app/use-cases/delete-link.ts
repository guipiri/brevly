import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { LinkNotFoundException } from './errors/link-not-found'

const deleteLinkInput = z.object({
  alias: z.string(),
})

type DeleteLinkInput = z.infer<typeof deleteLinkInput>

export const deleteLinkUseCase = async (input: DeleteLinkInput) => {
  const { alias } = deleteLinkInput.parse(input)

  const aliasExists = await db.query.links.findFirst({
    where: eq(links.alias, alias),
  })

  if (!aliasExists) throw new LinkNotFoundException()

  const deletedLink = await db
    .delete(links)
    .where(eq(links.alias, alias))
    .returning()

  return { deletedLink: deletedLink[0] }
}
