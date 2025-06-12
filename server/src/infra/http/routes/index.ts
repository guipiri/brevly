import { createLinkRoute } from './create-link-route'
import { deleteLinkRoute } from './delete-link-route'
import { fetchLinkRoute } from './fetch-links-route'
import { getLinkByAliasRoute } from './get-link-by-alias'

export const fastifyRoutes = [
  createLinkRoute,
  deleteLinkRoute,
  fetchLinkRoute,
  getLinkByAliasRoute,
]
