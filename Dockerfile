FROM node:12.14.0-slim AS base

# Necessary if building/running these containers from data center on-premises (not needed for AWS deployment)
# ENV http_proxy=${http_proxy}
# ENV https_proxy=${https_proxy}

# An empty file that we can "copy" around to create dependencies between build stages
RUN echo -n > /noop

WORKDIR /opt/app

# Copy over package.json (and package-lock.json) first and do an npm install
# It allows us to use Docker image caching on subsequent builds (unless we update package.json)
COPY server/package*.json ./
RUN npm --production install

# Add files needed to run server
COPY server/src ./src

FROM base AS testfiles
COPY server/test/ ./test/
RUN npm install

FROM testfiles AS audit
RUN echo '\nNode version:' \
 && node --version \
 && echo '\nnpm version:' \
 && npm --version \
 && echo '\nOutdated Packages:' \
 && npm outdated || true \
 && echo '' \
 && npm audit --audit-level critical

FROM testfiles AS lint
RUN npm run lint

FROM testfiles AS unittest
RUN npm run test

# You can target this stage to check that all the tests pass
FROM base as test
COPY --from=audit /noop /
COPY --from=lint /noop /
COPY --from=unittest /noop /

# Note that test is basically identical to base, except that it requires that all tests pass
FROM test AS release
ENV NODE_ENV="production"
EXPOSE 3000
USER node
CMD ["node", "index.js"]

# https://docs.docker.com/engine/reference/builder/
