# Build Stage
FROM node:20.9.0-alpine AS BUILD_IMAGE

# Installer les dépendances nécessaires pour canvas
# RUN apk add --no-cache \
#   build-base \
#   cairo-dev \
#   pango-dev \
#   jpeg-dev \
#   giflib-dev \
#   librsvg-dev

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:20.9.0

# Installer les dépendances nécessaires pour canvas
# RUN apt-get update && \
#   apt-get install -y \
#   libcairo2-dev \
#   libpango1.0-dev \
#   libjpeg-dev \
#   libgif-dev \
#   librsvg2-dev && \
#   apt-get clean && \
#   rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/next.config.js ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
