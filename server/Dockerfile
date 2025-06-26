FROM node:22-alpine AS base

WORKDIR /usr/src/app

FROM base AS dependencies

COPY package*.json ./

RUN npm install

FROM base AS build

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build
RUN npm prune --omit=dev

FROM node:22-alpine AS deploy

USER 1000

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 3333

CMD ["npm", "start"]
