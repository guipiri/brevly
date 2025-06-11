import { db } from '@/infra/db'

export const fetchLinks = async () => {
  const links = await db.query.links.findMany()
  return { links }
}
