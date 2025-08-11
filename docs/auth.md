## Auth

### Model: `User`
Location: `Auth/models/User.js`

```js
username: { type: String, unique: true, required: true }
password: { type: String, required: true }
email: { type: String, unique: true, required: true }
role: { type: String, enum: ['user','admin'], default: 'user' }
```

### Routes
Location: `Auth/routes/auth.js`

- Router scaffold present; no endpoints defined in the current codebase.