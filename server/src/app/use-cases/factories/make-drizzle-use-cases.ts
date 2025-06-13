import { DrizzleLinksRepository } from '@/infra/repositories/drizzle/drizzle-links-repository'
import { CreateLinkUseCase } from '../create-link'
import { DeleteLinkUseCase } from '../delete-link'
import { FetchLinksUseCase } from '../fetch-links'
import { GetLinkByAlias } from '../get-link-by-alias'
import { IncrementLinkUseCase } from '../increment-link-clicks'
import { UploadCsvToStorageUseCase } from '../upload-csv-to-storage'

const drizzleLinksRepository = new DrizzleLinksRepository()

export const createLinkUseCase = new CreateLinkUseCase(drizzleLinksRepository)

export const deleteLinkUseCase = new DeleteLinkUseCase(drizzleLinksRepository)

export const fetchLinkUseCase = new FetchLinksUseCase(drizzleLinksRepository)

export const getLinkByAliasUseCase = new GetLinkByAlias(drizzleLinksRepository)

export const incrementLinkClicksUseCase = new IncrementLinkUseCase(
  drizzleLinksRepository
)

export const uploadCsvToStorageUseCase = new UploadCsvToStorageUseCase(
  drizzleLinksRepository
)
