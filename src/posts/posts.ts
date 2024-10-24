import { Hono } from 'hono'

const app = new Hono()

// メモリ上にデータを保存する
let posts = [
  { id: '1', title: 'First Post', content: 'This is the first post' },
  { id: '2', title: 'Second Post', content: 'This is the second post' },
  { id: '3', title: 'Third Post', content: 'This is the third post' },
]

// 全ての投稿を取得する
app.get('/', (c) => {
  return c.json({ posts })
})

// 投稿を取得する
app.get('/:id', (c) => {
  const id = c.req.param('id')
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return c.json({ message: 'Post not found' }, 404)
  }

  return c.json(post)
})

// 投稿を作成する
app.post('/', async (c) => {
  const { title, content } = await c.req.json<{
    title: string
    content: string
  }>()
  const newPost = { id: String(posts.length + 1), title, content }
  posts = [...posts, newPost]
  return c.json(newPost, 201)
})

// 投稿を更新する
app.put('/:id', async (c) => {
  const id = c.req.param('id')
  const index = posts.findIndex((p) => p.id === id)

  if (index === -1) {
    return c.json({ message: 'Post not found' }, 404)
  }

  const { title, content } = await c.req.json()

  posts[index] = { ...posts[index], title, content }

  return c.json(posts[index])
})

// 投稿を削除する
app.delete('/:id', async (c) => {
  const id = c.req.param('id')
  const index = posts.findIndex((p) => p.id === id)

  if (index === -1) {
    return c.json({ message: 'Post not found' }, 404)
  }

  posts = posts.filter((p) => p.id !== id)

  return c.json({ message: 'Post deleted' })
})

export default app
