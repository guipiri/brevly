import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from '../env'
import { fastifyRoutes } from './routes'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(fastifyCors, { origin: '*' })

// Register routes
for (const route of fastifyRoutes) {
  server.register(route)
}

server.listen({ port: env.PORT }).then(() => {
  console.log('Server is running!')
})
