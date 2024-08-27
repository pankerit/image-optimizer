FROM oven/bun:1
# bun server

WORKDIR /usr/src/app
COPY . ./

RUN bun install

EXPOSE 3000

CMD bun run start