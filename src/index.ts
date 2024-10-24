import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import posts from './posts/posts'
import auth from './auth/auth'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

// 全てのレスポンスをprettyJSONで整形する
app.use('*', prettyJSON())

// 認証が必要なルートを設定する
app.use(
  '/auth/*',
  basicAuth({
    username: 'admin',
    password: 'password',
  })
)

app.route('/posts', posts)
app.route('/auth', auth)

// cはcontextのこと
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
