import { z } from 'zod'
import type { links } from '../db/schemas/links'

export type CreateLinkInput = typeof links.$inferInsert
export type Link = typeof links.$inferSelect

const deleteLinkInput = z.object({
  alias: z.string(),
})

type DeleteLinkInput = z.infer<typeof deleteLinkInput>

export interface LinksRepository {
  create(input: CreateLinkInput): Promise<Link>
  delete(alias: string): Promise<Link | undefined>
  findByAlias(alias: string): Promise<Link | undefined>
  fetchLinks(): Promise<Link[]>
  incrementLinkClicks(alias: string): Promise<Link | undefined>
}
