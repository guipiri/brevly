import { date, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { randomUUID } from 'node:crypto'

export const links = pgTable('links', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  url: text('url').notNull(),
  alias: text('alias').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})
