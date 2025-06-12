import { db } from '@/infra/db'
import { links } from '@/infra/db/schemas/links'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const getLinkByAliasInput = z.object({
  alias: z.string(),
})

type GetLinkByAliasInput = z.infer<typeof getLinkByAliasInput>

export const getLinkByAlias = async (input: GetLinkByAliasInput) => {
  const link = await db.query.links.findFirst({
    where: eq(links.alias, input.alias),
  })

  return { link: link || null }
}
