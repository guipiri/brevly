import { DrizzleLinksRepository } from '@/infra/repositories/drizzle/drizzle-links-repository'
import { CreateLinkUseCase } from '../create-link'

const drizzleLinksRepository = new DrizzleLinksRepository()

export const createLinkUseCase = new CreateLinkUseCase(drizzleLinksRepository)
