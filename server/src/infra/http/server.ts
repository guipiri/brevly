import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  hasZodFastifySchemaValidationErrors,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from '../../env'
import { fastifyRoutes } from './routes'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, request, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      success: false,
      message: `Validation error: ${error.message}`,
    })
  }

  console.error(error)

  return reply
    .status(500)
    .send({ success: false, message: 'Internal server error.' })
})

server.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
})

// Register routes
for (const route of fastifyRoutes) {
  server.register(route)
}

server.listen({ port: env.PORT }).then(() => {
  console.log('Server is running!')
})
