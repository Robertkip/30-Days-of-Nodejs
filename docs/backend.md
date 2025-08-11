## Backend API - Students

Base URL: `/students` (server default port `4000`)

### Environment
- **MONGO_URI**: MongoDB connection string
- Port: `PORT` env or 4000

### Routes

- **POST** `/students/create-student`
  - **Body**: `{ name: string, email: string, rollno: number }`
  - **Response**: Created student document
  - Example:
    ```bash
    curl -X POST http://localhost:4000/students/create-student \
      -H 'Content-Type: application/json' \
      -d '{"name":"Alice","email":"alice@example.com","rollno":101}'
    ```

- **GET** `/students/`
  - **Response**: `Student[]`
  - Example:
    ```bash
    curl http://localhost:4000/students/
    ```

- **GET** `/students/edit-student/:id`
  - **Params**: `id` (MongoDB ObjectId)
  - **Response**: `Student` or 404
  - Example:
    ```bash
    curl http://localhost:4000/students/edit-student/665e0c... 
    ```

- **PUT** `/students/update-student/:id`
  - **Params**: `id`
  - **Body**: any subset of `{ name, email, rollno }`
  - **Response**: Updated `Student`
  - Example:
    ```bash
    curl -X PUT http://localhost:4000/students/update-student/665e0c... \
      -H 'Content-Type: application/json' \
      -d '{"email":"alice+1@example.com"}'
    ```

- **DELETE** `/students/delete-student/:id`
  - **Params**: `id`
  - **Response**: `{ msg: 'Student deleted successfully' }` or 404
  - Example:
    ```bash
    curl -X DELETE http://localhost:4000/students/delete-student/665e0c...
    ```

### Model: `Student`
Located at `backend/models/Students.js`

```js
name: String
email: String
rollno: Number
collection: 'students'
```

### Server
- Entry: `backend/index.js`
- Middleware: `body-parser` JSON/urlencoded, `cors`
- Mounts: `app.use('/students', studentRoute)`