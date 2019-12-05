FROM node:12.13.1-slim AS base

# An empty file that we can "copy" around to create dependencies between build stages
RUN echo -n > /noop

WORKDIR /opt/app

# Copy over package.json (and package-lock.json) first and do an npm install
# It allows us to use Docker image caching on subsequent builds (unless we update package.json)
COPY server/package*.json ./
RUN npm install

# Add files needed to run server
COPY /src ./src


