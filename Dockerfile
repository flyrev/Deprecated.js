FROM node:slim

COPY . .
RUN npm ci
RUN npm test
RUN npm lint
ENTRYPOINT ["echo", "It worked!"]
