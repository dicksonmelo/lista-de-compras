FROM public.ecr.aws/docker/library/node:16-alpine AS builder
RUN mkdir -p /app/node_modules && chown -R node:node /app
USER node
WORKDIR /server
COPY --chown=node:node . .
RUN yarn
RUN yarn build
RUN yarn tsc ormconfig.ts

FROM public.ecr.aws/docker/library/node:16-alpine
RUN yarn global add pm2
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
RUN echo "America/Sao_Paulo" >  /etc/timezone
RUN apk del tzdata

WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN yarn install --production=true
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/ormconfig.js ormconfig.js

ENV NODE_ENV=production
ENV PORT=1234
EXPOSE 1234

CMD [ "pm2", "start", "dist/server.js", "--no-daemon"]

