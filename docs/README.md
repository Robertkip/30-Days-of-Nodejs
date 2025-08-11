## Project Documentation

- **Backend API (Students)**: See `docs/backend.md`
- **Starter API (Books)**: See `docs/starter.md`
- **Frontend Components**: See `docs/frontend.md`
- **Auth (Models/Routes)**: See `docs/auth.md`
- **Utilities and Helpers**: See `docs/utilities.md`

### Quickstart

- **Backend (students)**:
  ```bash
  cd backend
  npm install
  MONGO_URI="your-connection-string" node index.js
  # Base: http://localhost:4000/students
  ```
- **Starter (books)**:
  ```bash
  cd starter
  npm install
  MONGO_URL="your-connection-string" node index.js
  # Base: http://localhost:4005/books
  ```
- **Frontend (Vite + React)**:
  ```bash
  cd frontend/vite-project
  npm install
  npm run dev
  ```