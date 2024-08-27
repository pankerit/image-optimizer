import sharp from 'sharp'

const server = Bun.serve({
    port: 3000,
    async fetch(request) {
        const buffer = await request.arrayBuffer()
        const image = await sharp(buffer).png({ compressionLevel: 9 }).toBuffer()
        return new Response(image, { headers: { 'Content-Type': 'image/png' } })
    },
})

console.log(`Server running at http://localhost:${server.port}`)
