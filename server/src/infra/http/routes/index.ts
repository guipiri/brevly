import { createLinkRoute } from './create-link-route'
import { deleteLinkRoute } from './delete-link-route'
import { fetchLinkRoute } from './fetch-links-route'

export const fastifyRoutes = [createLinkRoute, deleteLinkRoute, fetchLinkRoute]
