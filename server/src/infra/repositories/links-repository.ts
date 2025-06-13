import type { links } from '../db/schemas/links'

export type CreateLinkInput = typeof links.$inferInsert
export type Link = typeof links.$inferSelect

export interface LinksRepository {
  create(input: CreateLinkInput): Promise<Link>
  findByAlias(alias: string): Promise<Link | undefined>
  fetchLinks(): Promise<Link[]>
  incrementLinkClicks(alias: string): Promise<Link | undefined>
}
