## Frontend (Vite + React)

### Components

- **CreateStudent** (`frontend/vite-project/src/components/student-create.jsx`)
  - Default export class component
  - Props: none
  - Renders placeholder text
  - Usage:
    ```jsx
    import CreateStudent from './components/student-create'
    <CreateStudent />
    ```

- **ListStudent** (`frontend/vite-project/src/components/student-list.jsx`)
  - Default export class component
  - Props: none
  - Usage:
    ```jsx
    import ListStudent from './components/student-list'
    <ListStudent />
    ```

- **EditStudent** (`frontend/vite-project/src/components/student-edit.jsx`)
  - Default export class component
  - Props: none
  - Usage:
    ```jsx
    import EditStudent from './components/student-edit'
    <EditStudent />
    ```

- **App** (`frontend/vite-project/src/App.jsx`)
  - Composes the above components; provides a demo counter

- **Bootstrap** (`frontend/vite-project/src/main.jsx`)
  - Mounts `<App />` using React 18 `createRoot`

### Service Worker Utils
File: `frontend/vite-project/src/serviceWorker.jsx`

- **register(config?)**
  - Registers a service worker in production
  - Optional callbacks: `config.onUpdate(registration)`, `config.onSuccess(registration)`
  - Example:
    ```js
    import { register } from './serviceWorker'
    register({
      onUpdate: (reg) => console.log('updated', reg),
      onSuccess: (reg) => console.log('cached', reg),
    })
    ```

- **unregister()**
  - Unregisters the active service worker
  - Example:
    ```js
    import { unregister } from './serviceWorker'
    unregister()
    ```