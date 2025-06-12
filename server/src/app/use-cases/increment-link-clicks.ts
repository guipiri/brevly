import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { LinkNotFoundException } from './errors/link-not-found'

const incrementLinkClicksInput = z.object({
  alias: z.string(),
})

type IncrementLinkClicksInput = z.infer<typeof incrementLinkClicksInput>

export const incrementLinkClicksUseCase = async (
  input: IncrementLinkClicksInput
) => {
  const { alias } = incrementLinkClicksInput.parse(input)

  const link = await db.query.links.findFirst({
    where: eq(links.alias, alias),
  })

  if (!link) throw new LinkNotFoundException()

  const incrementedLink = await db
    .update(links)
    .set({ clicks: link.clicks + 1 })
    .where(eq(links.alias, alias))
    .returning()

  return { link: incrementedLink[0] }
}
