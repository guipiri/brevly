import { DrizzleLinksRepository } from '@/infra/repositories/drizzle/drizzle-links-repository'
import { CreateLinkUseCase } from '../create-link'
import { DeleteLinkUseCase } from '../delete-link'

const drizzleLinksRepository = new DrizzleLinksRepository()

export const createLinkUseCase = new CreateLinkUseCase(drizzleLinksRepository)

export const deleteLinkUseCase = new DeleteLinkUseCase(drizzleLinksRepository)
