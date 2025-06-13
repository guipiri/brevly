import { createLinkRoute } from './create-link-route'
import { deleteLinkRoute } from './delete-link-route'
import { fetchLinkRoute } from './fetch-links-route'
import { getLinkByAliasRoute } from './get-link-by-alias'
import { incrementLinkCliksRoute } from './increment-link-clicks-route'
import { uploadCsvToStorageRoute } from './upload-csv-to-storage-route'

export const fastifyRoutes = [
  createLinkRoute,
  deleteLinkRoute,
  fetchLinkRoute,
  getLinkByAliasRoute,
  incrementLinkCliksRoute,
  uploadCsvToStorageRoute,
]
