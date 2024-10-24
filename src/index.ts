import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import posts from './posts/posts'

const app = new Hono()

app.use('*', prettyJSON())

// cはcontextのこと
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/posts', posts)

export default app
