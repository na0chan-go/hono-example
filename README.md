# hono-example

## Install

```bash
bun install
```

## Run

```bash
bun run dev
```

## Deploy

```bash
bun run deploy
```

## Test

### Get all posts

```bash
curl http://localhost:3000/posts
```

### Create a post

```bash
curl -X POST http://localhost:3000/posts -H "Content-Type: application/json" -d '{"title": "Test Post", "content": "This is a test post"}'
```

### Update a post

```bash
curl -X PUT http://localhost:3000/posts/1 -H "Content-Type: application/json" -d '{"title": "Updated Post", "content": "This is an updated post"}'
```

### Delete a post

```bash
curl -X DELETE http://localhost:3000/posts/1
```
