# syntax=docker/dockerfile:1

# glibc base (not alpine): sharp ships glibc prebuilds and next/image needs it
FROM node:24-slim AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable
WORKDIR /app


# ---- deps: cached on the lockfile alone ----
FROM base AS deps
# pnpm-workspace.yaml carries the allowBuilds / ignoredBuiltDependencies policy
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile


# ---- builder: needs network for next/font/google ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY next.config.ts postcss.config.mjs tsconfig.json mdx-components.tsx ./
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY content ./content
COPY public ./public
RUN pnpm build


# ---- runner ----
FROM node:24-slim AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
WORKDIR /app

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
# lib/content reads content/ from process.cwd() at module scope. next's tracer
# currently pulls it into standalone on its own, but the path is built at runtime
# so that's incidental — copy it explicitly so a trace change can't cause ENOENT
COPY --from=builder --chown=node:node /app/content ./content

USER node
EXPOSE 3000
CMD ["node", "server.js"]
