## Starter API - Books

Base URL: `/books` (server default port `4005`)

### Environment
- **MONGO_URL**: MongoDB connection string
- Port: `PORT` env or 4005

### Routes

- **GET** `/books/`
  - **Response**: `{ count: number, data: Book[] }`
  - Example:
    ```bash
    curl http://localhost:4005/books/
    ```

- **GET** `/books/:id`
  - **Params**: `id` (ObjectId)
  - **Response**: `Book`
  - Example:
    ```bash
    curl http://localhost:4005/books/665e0c...
    ```

- **POST** `/books/`
  - **Body (required)**: `{ title: string, author: string, published_date: number }`
  - **Response**: Created `Book`
  - Example:
    ```bash
    curl -X POST http://localhost:4005/books/ \
      -H 'Content-Type: application/json' \
      -d '{"title":"Dune","author":"Frank Herbert","published_date":1965}'
    ```

- **PUT** `/books/:id`
  - **Body (required)**: `{ title, author, published_date }`
  - **Response**: `{ message: 'Book was updated successfully.' }`
  - Example:
    ```bash
    curl -X PUT http://localhost:4005/books/665e0c... \
      -H 'Content-Type: application/json' \
      -d '{"title":"Dune (Updated)","author":"Frank Herbert","published_date":1966}'
    ```

- **DELETE** `/books/:id`
  - **Response**: `{ message: 'Book was deleted successfully.' }`
  - Example:
    ```bash
    curl -X DELETE http://localhost:4005/books/665e0c...
    ```

### Model: `Book`
Intended schema (see `starter/models/user.js`):

```js
{
  title: { type: String, required: true },
  author: { type: String, required: true },
  published_date: { type: Number, required: true },
}
```

### Server
- Entry: `starter/index.js`
- Middleware: `express.json()`, `cors`
- Mounts: `app.use('/books', booksRoute)`