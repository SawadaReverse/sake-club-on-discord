FROM node:20-alpine AS builder

COPY . /app
WORKDIR /app

RUN npm install -g pnpm && pnpm install --frozen-lockfile
RUN pnpm tsc


FROM node:20-alpine

ARG BOT_TOKEN
ENV BOT_TOKEN=${BOT_TOKEN}

ARG CHANNEL_NAME
ENV CHANNEL_NAME=${CHANNEL_NAME}

ARG LOG_LEVEL
ENV LOG_LEVEL=${LOG_LEVEL}

ARG TORIKI_COMMAND
ENV TORIKI_COMMAND=${TORIKI_COMMAND}

COPY --from=builder /app/dists /app/dists
COPY --from=builder /app/node_modules /app/node_modules
WORKDIR /app

CMD ["node", "dists/src/index.js"]