FROM node:16-alpine as development

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY src/ src/

RUN yarn run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN yarn install --production=true

COPY --from=development /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
