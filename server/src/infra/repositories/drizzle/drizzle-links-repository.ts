import { db } from '@/infra/db'
import { schema } from '@/infra/db/schemas'
import { eq } from 'drizzle-orm'
import type { CreateLinkInput, LinksRepository } from '../links-repository'

export class DrizzleLinksRepository implements LinksRepository {
  drizzleClient = db

  async create(input: CreateLinkInput) {
    const newLink = await this.drizzleClient
      .insert(schema.links)
      .values(input)
      .returning()
    return newLink[0]
  }

  async findByAlias(alias: string) {
    const link = await this.drizzleClient.query.links.findFirst({
      where: eq(schema.links.alias, alias),
    })

    return link
  }

  async fetchLinks() {
    const links = await this.drizzleClient.query.links.findMany()
    return links
  }

  async incrementLinkClicks(alias: string) {
    const link = await this.findByAlias(alias)

    if (!link) return

    const incrementedLink = await this.drizzleClient
      .update(schema.links)
      .set({ clicks: link.clicks + 1 })
      .where(eq(schema.links.alias, alias))
      .returning()
    return incrementedLink[0]
  }
}
