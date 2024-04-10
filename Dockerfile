# Install dependencies only when needed
FROM node:18-alpine3.18 AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY . ./
RUN npm i

FROM node:18-alpine3.18
RUN apk update && apk add --no-cache
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . ./
CMD ["npm", "run", "serve"]