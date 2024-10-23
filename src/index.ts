import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/test', (c) => {
  return c.json({ message: 'This is a test' })
})

app.get('/api/v1/:name', (c) => {
  const { name } = c.req.param()
  return c.json({ message: `Hello ${name}` })
})

export default app
